---
title: vite 源码解析（版本：5.0.0-beta.2）
author: power
description: 在 webpack 横行的时代，webpack 的影响力几乎统治了 web 前端，react，vue-cli 等等工具都借助于 webpack 构建。在使用过程中，Webpack 构建十几个页面几百个组件的应用的性能出现了严重下降，说句公道话，webpack 的性能其实是很好的，最大的问题是配置过于复杂，导致绝大多数人不能正确的配置导致性能下降。天下苦 webpack 久矣，在这个时候，尤大巧妙的利用 esbuild 和 rollup，借助浏览器原生的 esm 能力创造的 vite 横空出世。一旦体验过，就再也回不去了
date: 2023-09-26 09:25:00
link: ./frontend/Vite
tags:
  - 源码
---

# {{$frontmatter.title}}

- {{$frontmatter.description}}

### -时间对比 1

- Webpack：启动时间 = 初始化模块加载 + 编译服务端/客户端 bundle 时间 + Midway
- vite： 启动时间 = 更少的初始化模块加载 + Midway 启动时间

### 问题：作为一个打包构建工具需要解决以下基本问题

- 1、vite 如何为开发提供开发环境的
- 2、文件更改，vite 如何热更新
- 3、vite 如何进行打包的

# 配置调试环境

- 克隆 vite 源码

```
cd packages/vite
pnpm i
npm run dev
cd playground/cli
```

- vscode 配置

```json
    {
      "name": "playground",
      "request": "launch",
      "runtimeArgs": ["run-script", "dev"],
      "runtimeExecutable": "npm",
      "console": "integratedTerminal",
      "skipFiles": ["<node_internals>/**"],
      "type": "node",
      "cwd": "${workspaceFolder}/vite/playground/cli"
    },
    {
      "name": "playground build",
      "request": "launch",
      "runtimeArgs": ["run-script", "build"],
      "runtimeExecutable": "npm",
      "console": "integratedTerminal",
      "skipFiles": ["<node_internals>/**"],
      "type": "node",
      "cwd": "${workspaceFolder}/vite/playground/cli"
    }
```

# 开始

1、第一个问题

- 简单来说通过 nodejs 的 http 和 ws 库启动 http 和 socket 服务

```js
export async function _createServer(inlineConfig = {}, options) {
  // 解析配置
  const config = await resolveConfig(inlineConfig, 'serve');
  const { root, server: serverConfig } = config;
  const httpsOptions = await resolveHttpsConfig(config.server.https);
  const { middlewareMode } = serverConfig;
  const resolvedWatchOptions = resolveChokidarOptions(config, {
    disableGlobbing: true,
    ...serverConfig.watch,
  });
  const middlewares = connect();

  // 创建http和socket
  const httpServer = middlewareMode ? null : await resolveHttpServer(serverConfig, middlewares, httpsOptions);
  const ws = createWebSocketServer(httpServer, config, httpsOptions);
  if (httpServer) {
    setClientErrorHandler(httpServer, config.logger);
  }
}

export async function resolveHttpServer({ proxy }, app, httpsOptions) {
  if (!httpsOptions) {
    const { createServer } = await import('node:http');
    return createServer(app);
  }
  //...
}
export function createWebSocketServer(server, config, httpsOptions) {
  let wss;
  let wsHttpServer = undefined;
  const hmr = isObject(config.server.hmr) && config.server.hmr;
  const hmrServer = hmr && hmr.server;
  const hmrPort = hmr && hmr.port;
  // TODO: the main server port may not have been chosen yet as it may use the next available
  const portsAreCompatible = !hmrPort || hmrPort === config.server.port;
  const wsServer = hmrServer || (portsAreCompatible && server);
  let hmrServerWsListener;
  const customListeners = new Map();
  const clientsMap = new WeakMap();
  const port = hmrPort || 24678;
  const host = (hmr && hmr.host) || undefined;
  if (wsServer) {
    let hmrBase = config.base;
    const hmrPath = hmr ? hmr.path : undefined;
    if (hmrPath) {
      hmrBase = path.posix.join(hmrBase, hmrPath);
    }
    // 来自ws库
    wss = new WebSocketServerRaw({ noServer: true });
    hmrServerWsListener = (req, socket, head) => {
      if (req.headers['sec-websocket-protocol'] === HMR_HEADER && req.url === hmrBase) {
        wss.handleUpgrade(req, socket, head, (ws) => {
          wss.emit('connection', ws, req);
        });
      }
    };
    wsServer.on('upgrade', hmrServerWsListener);
  }
}
```

### 第二个问题，vite 如何实现热更新 HRM

- 通过 chokidar 库监听

```js
// chokidar监听文件变化
const watcher = watchEnabled
  ? chokidar.watch(
      // config file dependencies and env file might be outside of root
      [root, ...config.configFileDependencies, config.envDir],
      resolvedWatchOptions
    )
  : createNoopWatcher(resolvedWatchOptions);
```

- 通过 chokidar 库监听文件变化

```js
// chokidar监听文件变化
const watcher = watchEnabled
  ? chokidar.watch(
      // config file dependencies and env file might be outside of root
      [root, ...config.configFileDependencies, config.envDir],
      resolvedWatchOptions
    )
  : createNoopWatcher(resolvedWatchOptions);
```

- 根据条件分别通过 fsEventsHandler 或者 nodeFsHandler 进行文件状态的监听, 分别是底层的 fs.watch 和 fs.watchFile 还有 mac 底层库 fsevents 来监听文件变化，通过 webSocket 推送给前端含路径信息

```js
// Initialize with proper watcher.
if (opts.useFsEvents) {
  this._fsEventsHandler = new FsEventsHandler(this);
} else {
  this._nodeFsHandler = new NodeFsHandler(this);
}

// 文件的增删改监听
watcher.on('change', async (file) => {
  file = normalizePath(file);
  // invalidate module graph cache on file change
  moduleGraph.onFileChange(file);
  await onHMRUpdate(file, false);
});
watcher.on('add', onFileAddUnlink);
watcher.on('unlink', onFileAddUnlink);

// 利用socket推送更新内容
config.logger.info(colors.green(`hmr update `) + colors.dim([...new Set(updates.map((u) => u.path))].join(', ')), {
  clear: !afterInvalidation,
  timestamp: true,
});
ws.send({
  type: 'update',
  updates,
});
```

- 前端 header 插入@vite/client 脚本，通过监听 message 接收路径信息，vite 是把这个更新文件再请求一次。
  至此，整个更新结束

```js
async function fetchUpdate({ path, acceptedPath, timestamp, explicitImportRequired }) {
  const mod = hotModulesMap.get(path);
  if (!mod) {
    // In a code-splitting project,
    // it is common that the hot-updating module is not loaded yet.
    // https://github.com/vitejs/vite/issues/721
    return;
  }
  let fetchedModule;
  const isSelfUpdate = path === acceptedPath;
  // determine the qualified callbacks before we re-import the modules
  const qualifiedCallbacks = mod.callbacks.filter(({ deps }) => deps.includes(acceptedPath));
  if (isSelfUpdate || qualifiedCallbacks.length > 0) {
    const disposer = disposeMap.get(acceptedPath);
    if (disposer) await disposer(dataMap.get(acceptedPath));
    const [acceptedPathWithoutQuery, query] = acceptedPath.split(`?`);
    try {
      // 请求文件
      fetchedModule = await import(
        /* @vite-ignore */
        base + acceptedPathWithoutQuery.slice(1) + `?${explicitImportRequired ? 'import&' : ''}t=${timestamp}${query ? `&${query}` : ''}`
      );
    } catch (e) {
      warnFailedFetch(e, acceptedPath);
    }
  }
  return () => {
    for (const { deps, fn } of qualifiedCallbacks) {
      // 更新
      fn(deps.map((dep) => (dep === acceptedPath ? fetchedModule : undefined)));
    }
    const loggedPath = isSelfUpdate ? path : `${acceptedPath} via ${path}`;
    console.debug(`[vite] hot updated: ${loggedPath}`);
  };
}
```

# 第三个问题：vite 如何打包构建

- 很简单，使用 rollup 打包，借助 rollup 生态

```js
      const { watch } = await import('rollup')
      const watcher = watch({
        ...rollupOptions,
        output: normalizedOutputs,
        watch: {
          ...config.build.watch,
          chokidar: resolvedChokidarOptions,
        },
      })

      watcher.on('event', (event) => {
        if (event.code === 'BUNDLE_START') {
          config.logger.info(colors.cyan(`\nbuild started...`))
          if (options.write) {
            prepareOutDir(outDirs, options.emptyOutDir, config)
          }
        } else if (event.code === 'BUNDLE_END') {
          event.result.close()
          config.logger.info(colors.cyan(`built in ${event.duration}ms.`))
        } else if (event.code === 'ERROR') {
          outputBuildError(event.error)
        }
      })

      return watcher
    }

    // write or generate files with rollup
    const { rollup } = await import('rollup')
    bundle = await rollup(rollupOptions)
```

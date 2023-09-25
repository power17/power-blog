---
title: vite 源码解析（版本：5.0.0-beta.2）
author: power
description: 在 webpack 横行的时代，webpack 的影响力几乎统治了 web 前端，react，vue-cli 等等工具都借助于 webpack 构建。在使用过程中，Webpack 构建十几个页面几百个组件的应用的性能出现了严重下降，说句公道话，webpack 的性能其实是很好的，最大的问题是配置过于复杂，导致绝大多数人不能正确的配置导致性能下降。天下苦 webpack 久矣，在这个时候，尤大巧妙的利用 esbuild 和 rollup，借助浏览器原生的 esm 能力创造的 vite 横空出世。一旦体验过，就再也回不去了
date: 2023-09-21 12:46:28
link: ./frontend/Vite
tags:
  - 源码
---

# {{$frontmatter.title}}

- {{$frontmatter.description}}

  <pre class="mermaid">
            graph TD 
            A[Client] --> B[Load Balancer] 
            B --> C[Server1] 
            B --> D[Server2]
    </pre>

### -时间对比

- Webpack：启动时间 = 初始化模块加载 + 编译服务端/客户端 bundle 时间 + Midway
- vite： 启动时间 = 更少的初始化模块加载 + Midway 启动时间

### 问题：作为一个打包构建工具需要解决以下基本问题

- 1、vite 如何为开发提供开发环境的
- 2、文件更改，vite 如何热更新
- 3、vite 如何进行打包的

## 目录

```
.
├── CHANGELOG.md
├── LICENSE.md
├── README.md
├── api-extractor.json
├── bin # 指令目录
├── client.d.ts
├── dist
├── index.cjs
├── index.d.cts
├── node_modules
├── package.json
├── rollup.config.ts
├── rollupLicensePlugin.ts
├── scripts
├── src  #存放源码
├── tsconfig.base.json
├── tsconfig.check.json
├── tsconfig.json
└── types
```

# 配置调试环境

```sh
# 创建
npm init vue@3
pnpm install
pnpm dev
```

- 克隆 vite 源码，添加 sourcemap，克隆 dist 文件到 node_modules 上

- vscode 配置

```json
{
  "name": "debugger",
  "request": "launch",
  "runtimeArgs": ["run-script", "dev"],
  "runtimeExecutable": "npm",
  "console": "integratedTerminal", // 内部终端
  "skipFiles": ["<node_internals>/**"],
  "type": "node",
  "cwd": "${workspaceFolder}",
  "resolveSourceMapLocations": ["${workspaceFolder}/**"]
}
```

# 开始

1、第一个问题

- 简单来说通过 http 和 ws 库启动 http 和 socket 服务

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

- 第二个问题，vite 如何实现热更新

```
// chokidar监听文件变化
  const watcher = watchEnabled
        ? chokidar.watch(
        // config file dependencies and env file might be outside of root
        [root, ...config.configFileDependencies, config.envDir], resolvedWatchOptions)
        : createNoopWatcher(resolvedWatchOptions);
```

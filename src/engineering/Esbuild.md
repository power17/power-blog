---
title: esbuild基本使用
author: power
description: '版本（"^0.19.4"）'
date: 2023-10-17 15:14:33
link: ./engineering/Esbuild.md
tags:
  - 工程
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }}

## 一、打包

```js
import esbuild from 'esbuild';

const { build, transform } = esbuild;
async function runBuild() {
  // 异步方法，返回一个 Promise
  const result = await build({
    // ----  如下是一些常见的配置  ---
    // 当前项目根目录
    absWorkingDir: process.cwd(),
    // 入口文件列表，为一个数组
    entryPoints: ['./src/index.jsx'],
    // 打包产物目录
    outdir: 'dist',
    // 是否需要打包，一般设为 true
    bundle: true,
    // 模块格式，包括`esm`、`commonjs`和`iife`
    format: 'esm',
    // 需要排除打包的依赖列表
    external: [],
    // 是否开启自动拆包
    splitting: true,
    // 是否生成 SourceMap 文件
    sourcemap: true,
    // 是否生成打包的元信息文件
    metafile: true,
    // 是否进行代码压缩
    minify: false,
    // 是否开启 watch 模式，在 watch 模式下代码变动则会触发重新打包
    // watch: false,
    // 是否将产物写入磁盘
    write: true,
    // Esbuild 内置了一系列的 loader，包括 base64、binary、css、dataurl、file、js(x)、ts(x)、text、json
    // 针对一些特殊的文件，调用不同的 loader 进行加载
    loader: {
      '.png': 'base64',
    },
  });
  console.log(result);
}

runBuild();
```

## 二、服务

```js
function runServer() {
  esbuild
    .context({
      outdir: './dist',
      absWorkingDir: process.cwd(),
      entryPoints: ['./src/index.jsx'],
      bundle: true,
      format: 'esm',
      splitting: true,
      sourcemap: true,
      ignoreAnnotations: true,
      metafile: true,
    })
    .then((server) => {
      server
        .serve({
          servedir: './dist',
        })
        .then(({ host, port }) => {
          console.log(`HTTP Server starts at port: http://${host}:${port} `);
        });
    });
}
runServer();
```

## 转译

```js
async function runTransform() {
  // 第一个参数是代码字符串，第二个参数为编译配置
  const content = await transform('const isNull = (str: string): boolean => str.length > 0;', {
    sourcemap: true,
    loader: 'tsx',
  });
  console.log(content, 'content');
}

runTransform();
```

## 四、插件

```js
// 插件
let envPlugin = {
  name: 'env',
  setup(build) {
    build.onResolve({ filter: /^env$/ }, (args) => ({
      path: args.path,
      namespace: 'env-ns',
    }));

    build.onLoad({ filter: /.*/, namespace: 'env-ns' }, () => ({
      contents: JSON.stringify(process.env),
      loader: 'json',
    }));
  },
};

esbuild
  .build({
    entryPoints: ['src/index.jsx'],
    bundle: true,
    outfile: './dist/out.js',
    // 应用插件
    plugins: [envPlugin],
  })
  .catch(() => process.exit(1));
```

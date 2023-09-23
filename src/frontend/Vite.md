---
title: vite源码解析（版本：5.0.0-beta.2）
author: power
description: 在webpack横行的时代，webpack的影响力几乎统治了web前端，react，vue-cli等等工具都借助于webpack构建。在使用过程中，Webpack构建十几个页面几百个组件的应用的性能出现了严重下降，说句公道话，webpack的性能其实是很好的，最大的问题是配置过于复杂，导致绝大多数人不能正确的配置导致性能下降。天下苦webpack久矣，在这个时候，尤大巧妙的利用esbuild和rollup，借助浏览器原生的esm能力创造的vite横空出世。一旦体验过，就再也回不去了
date: 2023-09-21 12:46:28
link: ./frontend/Vite
tags:
  - 源码
---

# {{$frontmatter.title}}

- {{$frontmatter.description}}

### -时间对比

- Webpack：启动时间 = 初始化模块加载 + 编译服务端/客户端 bundle 时间 + Midway
- vite： 启动时间 = 更少的初始化模块加载 + Midway 启动时间

### 问题：作为一个打包构建工具需要解决以下基本问题

1、vite 如何为开发提供开发环境的
2、文件更改，vite 如何热更新
3、vite 如何进行打包的

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

### 开发的起点： vite --mode dev

- 配置调试环境

```sh
# vite项目中 packages/vite
npm link
pnpm dev
```

- vscode 配置

```json
{
  "name": "vite调试",
  "request": "launch",
  "runtimeArgs": ["--mode", "dev"],
  "cwd": "${workspaceFolder}/packages/vite",
  "runtimeExecutable": "vite",
  "skipFiles": ["<node_internals>/**"],
  "type": "node"
}
```

- 调试 ts 文件,在 tsconfig 上加上 sourceMap,执行 tsc --build 编译

```js
"compilerOptions": {
    "sourceMap": true
  }
```

---
title: vscode配置
author: power
description: vscode调试
date: 2023-09-21 12:46:28
link: ./frontend/Vscode
tags:
  - config
---

# {{$frontmatter.title}}

- {{$frontmatter.description}}

```js
{
  // 使用 IntelliSense 了解相关属性。
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "debugger",
      "request": "launch",
      "runtimeArgs": ["run-script", "dev"],
      "runtimeExecutable": "npm",
      "console": "integratedTerminal",
      "skipFiles": ["<node_internals>/**"],
      "type": "node",
      "cwd": "${workspaceFolder}/vite-demo/vite-debugger",
      "resolveSourceMapLocations": ["${workspaceFolder}/**"]
    },
  ]
}

```

- request

* 调试模式启动浏览器，访问 url，连上进行调试
* 连接已经调试模式启动的 url 进行调试

- userDataDir --- true(默认值代表临时目录保存) fase（使用临时目录）
- sourcemap --- true(默认值开启)
  ts 中指定 declaration 会生成 d.ts 声明文件， 还可以指定 declarationMap 来生成 sourcemap

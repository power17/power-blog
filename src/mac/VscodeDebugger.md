---
title: vscode调试
author: power
description: 'vscode调试'
date: 2023-09-27 08:38:28
link: ./mac/VscodeDebugger
tags:
  - mac
---

; # {{$frontmatter.title}}

; - {{$frontmatter.description}}

- 调试 nest

```js
"configurations": [
    {
      "name": "nest debug",
      "request": "launch",
      "runtimeArgs": ["run-script", "start:dev"],
      "runtimeExecutable": "npm",
      "skipFiles": ["<node_internals>/**"],
      "type": "node",
      "console": "integratedTerminal"
    }
  ]
```
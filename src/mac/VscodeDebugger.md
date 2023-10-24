---
title: vscode调试
author: power
description: '记录vscode配置'
date: 2023-09-27 08:38:28
link: ./mac/VscodeDebugger
tags:
  - mac
---

# {{$frontmatter.title}}

- {{$frontmatter.description}}

# 调试 nest

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

# 调试 网页

```js
 {
      "name": "Launch Chrome",
      "request": "launch",
      "type": "chrome",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}"
}
```

# vscode 插件

- YAML
- vue.js Extension Pack
- Vue vscode snippets
- vue 3 snippets
- vscode-styled-components
- vite
- vite Runner
- typescript toolbox
- typescript importer
- typescript Extension Pack
- typescript debugger
- turbo console.log
- stylelint
- scss intellisense
- scss formatter
- scss everywhere
- sass
- prettierConfig for vscode
- prettier-code formatter
- path intellisense
- paste json as code
- node.js exec
- node.js Modules intellisense
- npm intellisense
- move Ts
- material icon theme
- live server
- licenser
- json2ts
- js jsx snippets
- javascript booster
- intellisense for css class name
- intellicode
- insert data string
- ignore files
- html css support
- gitignore
- formatting toggle
- eslint
- dotenv
- darcula theme
- commit tagger
- codeium
- cmake tools
- cmake
- choose alicense
- better comments
- babel javascript
- auto rename tag
- auto import
- auto complete tag
- auto close tag
- volar
- code runner

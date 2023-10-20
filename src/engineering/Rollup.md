---
title: rollup基本使用
author: power
description: '版本（"^0.19.4"）'
date: 2023-10-18 23:06:09
link: ./engineering/Rollup.md
tags:
  - 工程
---

# 常用插件

- @rollup/plugin-node-resolve 是为了允许我们加载第三方依赖，否则像 import React from 'react' 的依赖导入语句将不会被 Rollup 识别。
- @rollup/plugin-commonjs 的作用是将 CommonJS 格式的代码转换为 ESM 格式
- @rollup/plugin-json： 支持.json 的加载，并配合 rollup 的 Tree Shaking 机制去掉未使用的部分，进行按需打包。
- @rollup/plugin-babel：在 Rollup 中使用 Babel 进行 JS 代码的语法转译。
- @rollup/plugin-typescript: 支持使用 TypeScript 开发。
- @rollup/plugin-alias：支持别名配置。
- @rollup/plugin-replace：在 Rollup 进行变量字符串的替换。
- rollup-plugin-visualizer: 对 Rollup 打包产物进行分析，自动生成产物体积可视化分析图。

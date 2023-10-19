---
title: webpack使用
author: power
description: 'webpack@4.43.0 webpack-cli@3.3.12'
date: 2023-10-17 15:14:33
link: ./engineering/Webpack.md
tags:
  - 工程
---

# 配置

- output.path: 生成的真实文件存放地址
- output.publicPath: 资源访问路径。(也就是 urlhttps://www.apple.com/ipad/)
- filename 中的 hash 值：hash，chunkhash、contenthash,contenthash 是根据打包时 CSS 内容计算出的 hash 值。一般在使用提取 CSS 的插件的时候

# loader

- css-loader: 仅仅是解析 CSS 文件
- style-loader： ，就是通过 JS 动态生成 style 标签插入到 html 文件的 head 标签里。

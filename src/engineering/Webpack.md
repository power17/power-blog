---
title: webpack使用
author: power
description: 'webpack@4.43.0 webpack-cli@3.3.12'
date: 2023-10-17 15:14:33
link: ./engineering/Webpack.md
tags:
  - 工程
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }}

# 配置

- output.path: 生成的真实文件存放地址
- output.publicPath: 资源访问路径。(也就是 urlhttps://www.apple.com/ipad/)
- filename 中的 hash 值：hash，chunkhash、contenthash,contenthash 是根据打包时 CSS 内容计算出的 hash 值。一般在使用提取 CSS 的插件的时候

# loader

- css-loader: 仅仅是解析 CSS 文件
- style-loader： ，就是通过 JS 动态生成 style 标签插入到 html 文件的 head 标签里。
- babel-loader: 用 Babel 将 ES6 的代码转换成 ES5 版本的。(@babel/core@7.11.1 babel-loader@8.1.0, @babel/preset-env@7.11.1)
- file-loader:处理 js 中的导入文件的内容（图片、css 等），例如 JS 的 import 和 CSS 的 url()。本质是复制资源文件并替换访问地址，音视频等资源也可以使用它。file-loader 生成的文件默认的文件名是"[contenthash].[ext]"，contenthash 是资源内容 hash 值，ext 是文件扩展名。file-loader 默认使用 output.publicPath 作为资源访问地址
- url-loader：是 file-loader 的增强版，特殊功能是可以计算出文件的 base64 编码，

# 插件

- clean-webpack-plugin: 清除文件
- copy-webpack-plugin: 有一些本地资源，例如图片和音视频，在打包过程中没有任何模块使用到它们，但我们却想要把它们放在打包后的资源输出目录。
- webpack-bundle-analyzer: 分析包
- webpack-merge: 配置项合并
- DefinePlugin(自带):

# webpack 开发环境

webpack-dev-server：基于 webpack-dev-middleware 和 Express 的

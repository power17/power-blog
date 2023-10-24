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
- progressPlugin(自带)：进度

# webpack 开发环境

webpack-dev-server：基于 webpack-dev-middleware 和 Express 的

# babel

Babel 官方的 preset，我们实际可能会用到的其实就只有 4 个：
一个普通的 vue 工程，Babel 官方的 preset 只需要配一个"@babel/preset-env"就可以了

- @babel/preset-env
- @babel/preset-flow
- @babel/preset-react
- @babel/preset-typescript

## 1、babel-polyfill 在 Babel7 以后名字是@babel/polyfill

polyfill 广义上讲是为环境提供不支持的特性的一类文件或库,
@babel/polyfill 本质是由两个 npm 包 core-js 与 regenerator-runtime 组合而成的

## 2、@babel/preset-env

是 Babel6 时代 babel-preset-latest 的增强版。该预设除了包含所有稳定的转码插件，还可以根据我们设定的目标环境进行针对性转码。该预设还可以通过设置参数项进行针对性语法转换以及 polyfill 的部分引入。

### 如果我们对@babel/preset-env 的 targets 参数项进行了设置，那么就不使用 browserslist 的配置，而是使用 targets 的配置

- useBuiltIns:"usage"是在 babel7.4 后稳定的，只有我们使用到的 ES6 特性 API 在目标环境缺失的时候，Babel 才会引入 core-js 的 API 补齐模块。
- corejs：corejs 取值为 2 的时候，需要安装并引入 core-js@2 版本，或者直接安装并引入 polyfill 也可以。如果 corejs 取值为 3，必须安装并引入 core-js@3 版本才可以，否则 Babel 会转换失败并提示

- 工程目录下.browserslistrc 文件

```js
// 目标环境是市场份额大于1%的浏览器并且不考虑IE8及以下的IE浏览器。Browserslist叫做目标环境配置表
// Babel使用browserslist的配置功能依赖于@babel/preset-env，如果Babel没有配置任何预设或插件，那么Babel对转换的代码会不做任何处理，原封不动生成和转换前一样代码
"browserslist": [
    "> 1%",
    "not ie <= 8"
  ]
```

## 3、@babel/runtime ： 把所有语法转换会用到的辅助函数都集成在了一起。@babel/plugin-transform-runtime：自动移除语法转换后内联的辅助函数（inline Babel helpers），使用@babel/runtime/helpers 里的辅助函数来替代

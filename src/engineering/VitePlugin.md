---
title: vite 插件整理
author: power
description: vite插件整理
date: 2023-09-26 09:25:00
link: ./frontend/VitePlugin
tags:
  - 插件
---

# {{$frontmatter.title}}

- {{$frontmatter.description}}

# 静态资源

- 图片压缩： vite-plugin-imagemin

# 插件

```js
import { resolve } from 'path';
import { PluginOption } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { visualizer } from 'rollup-plugin-visualizer';
import { createHtmlPlugin } from 'vite-plugin-html';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import eslintPlugin from 'vite-plugin-eslint';
import viteCompression from 'vite-plugin-compression';
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite';
[
  vue(),
  // vue 可以使用 jsx/tsx 语法
  vueJsx(),
  // esLint 报错信息显示在浏览器界面上
  eslintPlugin(),
  // name 可以写在 script 标签上
  vueSetupExtend({}),
  // 创建打包压缩配置
  createCompression(viteEnv),
  // 注入变量到 html 文件
  createHtmlPlugin({
    inject: {
      data: { title: VITE_GLOB_APP_TITLE },
    },
  }),
  // 使用 svg 图标
  createSvgIconsPlugin({
    iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
    symbolId: 'icon-[dir]-[name]',
  }),
];
```

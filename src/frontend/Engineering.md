---
title: vite前端工程化之路
author: power
description: 面临几个问题：1、模块化需求 2、语法转译 3、产物质量 4、开发效率
date: 2023-10-08 11:34:19
link: ./frontend/Engineering
tags:
  - 源码
---

# {{$frontmatter.title}}

- {{$frontmatter.description}}

## 一、css 痛点

- 1、开发体验欠佳。比如原生 CSS 不支持选择器的嵌套
- 2、样式污染问题。如果出现同样的类名，很容易造成不同的样式互相覆盖和污染。
- 3、浏览器兼容问题。为了兼容不同的浏览器，我们需要对一些属性(如 transition)加上不同的浏览器前缀，比如 -webkit-、-moz-、-ms-、-o-
- 4、打包后的代码体积问题

* 方案：
  1、CSS 预处理器(sass/less) 2、CSS 后处理器 PostCSS(autoprefixer) 3、CSS Modules 4、css in js 5 、CSS 原子化框架

* css 配置

```sh
pnpm create vite
```

```js
 css: {
    // 进行 PostCSS 配置
    postcss: {
      plugins: [
       autoprefixer({
          // 指定目标浏览器
          overrideBrowserslist: ['safari >= 6', 'ff >= 10'],
        }),
      ],
    },
    // css module
    modules: {
      // 一般我们可以通过 generateScopedName 属性来对生成的类名进行自定义
      // 其中，name 表示当前文件名，local 表示类名
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
    // 全局注入
    preprocessorOptions: {
      scss: {
        // additionalData 的内容会在每个 scss 文件的开头自动注入
        additionalData: `@import "${variablePath}";`,
      },
    },
  },
```

## 二、代码规范

问题：

- 代码是人看的，统一风格有利于团队协作

### 方案： eslint 与 prettier 结合

```js
// .prettierrc.cjs
module.exports = {
  printWidth: 80, //一行的字符数，如果超过会进行换行，默认为80
  tabWidth: 2, // 一个 tab 代表几个空格数，默认为 2 个
  useTabs: false, //是否使用 tab 进行缩进，默认为false，表示用空格进行缩减
  singleQuote: true, // 字符串是否使用单引号，默认为 false，使用双引号
  semi: true, // 行尾是否使用分号，默认为true
  trailingComma: 'none', // 是否使用尾逗号
  bracketSpacing: true, // 对象大括号直接是否有空格，默认为 true，效果：{ a: 1 }
};
```

- 将 Prettier 集成到现有的 ESLint 工具中

````sh
pnpm i prettier -D
# 其中eslint-config-prettier用来覆盖 ESLint 本身的规则配置，而eslint-plugin-prettier则是用于让 Prettier 来接管eslint --fix即修复代码的能力。
pnpm i eslint-config-prettier eslint-plugin-prettier -D

```js
// .eslintrc.cjs
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    // 1. 接入 prettier 的规则
    "prettier",
    "plugin:prettier/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ['react-refresh', "@typescript-eslint", "prettier"],
  rules: {
    // 3. 注意要加上这一句，开启 prettier 自动修复的功能
    "prettier/prettier": "error",
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "react/react-in-jsx-scope": "off",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}

````

- 定义一个脚本

```js
{
  "scripts": {
    // 省略已有 script
    "lint": "eslint --ext .js,.jsx,.ts,.tsx --fix --quiet ./src",
  }
}
```

- 样式规范: stylelint

```sh
pnpm i stylelint stylelint-prettier stylelint-config-prettier stylelint-config-recess-order stylelint-config-standard stylelint-config-standard-scss -D

```

```js
// .stylelintrc.js
module.exports = {
  // 注册 stylelint 的 prettier 插件
  plugins: ['stylelint-prettier'],
  // 继承一系列规则集合
  extends: [
    // standard 规则集合
    'stylelint-config-standard',
    // standard 规则集合的 scss 版本
    'stylelint-config-standard-scss',
    // 样式属性顺序规则
    'stylelint-config-recess-order',
    // 接入 Prettier 规则
    'stylelint-config-prettier',
    'stylelint-prettier/recommended',
  ],
  // 配置 rules
  rules: {
    // 开启 Prettier 自动格式化功能
    'prettier/prettier': true,
  },
};
```

```js
// .stylelintrc.cjs
module.exports = {
  // 注册 stylelint 的 prettier 插件
  plugins: ['stylelint-prettier'],
  // 继承一系列规则集合
  extends: [
    // standard 规则集合
    'stylelint-config-standard',
    // standard 规则集合的 scss 版本
    'stylelint-config-standard-scss',
    // 样式属性顺序规则
    'stylelint-config-recess-order',
    // 接入 Prettier 规则
    'stylelint-config-prettier',
    'stylelint-prettier/recommended',
  ],
  // 配置 rules
  rules: {
    // 开启 Prettier 自动格式化功能
    'prettier/prettier': true,
  },
};
```

```js
{
  "scripts": {
    // 整合 lint 命令
    "lint": "npm run lint:script && npm run lint:style",
    // stylelint 命令
    "lint:style": "stylelint --fix \"src/**/*.{css,scss}\""
  }
}
```

### Husky + lint-staged 的 Git 提交工作流集成

初始化 Husky: ,并将 husky install 作为项目启动前脚本

```sh
pnpm i husky -D
# 初始化
npx husky install
npx husky add .husky/pre-commit "npm run lint"

```

- lint-staged： 就是用来解决上述全量扫描问题的，可以实现只对存入暂存区的文件进行 Lint 检查，大大提高了提交代码的效率。首先，让我们安装一下对应的 npm 包:

```
pnpm i -D lint-staged

```

- package.json

```js
{
  "lint-staged": {
    "**/*.{js,jsx,tsx,ts}": [
      "npm run lint:script",
      "git add ."
    ],
    "**/*.{scss}": [
      "npm run lint:style",
      "git add ."
    ]
  }
}
// 需要在 Husky 中应用lint-stage，回到.husky/pre-commit脚本中，将原来的npm run lint换成如下脚本
npx --no -- lint-staged

```

### 规范话 commit 信息

```sh
pnpm i commitlint @commitlint/cli @commitlint/config-conventional -D

```

```js
// .commitlintrc.cjs
module.exports = {
  extends: ['@commitlint/config-conventional'],
};
```

- 常用的 type 值包括如下:

* feat: 添加新功能。
* fix: 修复 Bug。
* chore: 一些不影响功能的更改。
* docs: 专指文档的修改。
* perf: 性能方面的优化。
* refactor: 代码重构。
* test: 添加一些测试代码等等。

#### 我们将 commitlint 的功能集成到 Husky 的钩子当中

```
npx husky add .husky/commit-msg "npx --no-install commitlint -e $HUSKY_GIT_PARAMS"

```

## 三、静态资源的处理

### 问题

- 静态资源解析并加载为一个 ES 模块的
- 生产环境下我们还需要考虑静态资源的部署问题、体积问题、网络性能问题

- 部署域名怎么配置？
- 资源打包成单文件还是作为 Base64 格式内联?
- 图片太大了怎么压缩？
- svg 请求数量太多了怎么优化？

### 三种场景

```js
// html
<img src="../../assets/a.png"></img>
// css
background: url('../../assets/b.png') norepeat;
// js
document.getElementById('hero-img').src = '../../assets/c.png'

```

### svg 加载

- Vue2 项目中可以使用 vite-plugin-vue2-svg 插件。
- Vue3 项目中可以引入 vite-svg-loader。
- React 项目使用 vite-plugin-svgr 插件。

### 图片压缩

```
pnpm i vite-plugin-imagemin -D

```

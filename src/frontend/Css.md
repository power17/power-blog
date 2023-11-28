---
title: 重学css
author: power
description: 重学css
date: 2023-09-21 12:46:28
link: ./frontend/Css
tags:
  - css
---

## 1、基础

- 普通规则
- 特殊规则

```css
/* 字符集 */
@charset "utf-8";
/* 引入css */
@charset @import "style.css";
/* 媒体查询 max-width:1000px */
@media screen and (width <= 1000px) {
}
/* animation */
@keyframes;
/* 自定义字体font-family */
@font-face;
```

## 2、 选择器

### 2、1 简单选择器

- 1、类型选择器： div{}
- 2、全体选择器：\*{}
- 3、id 选择器
- 4、类选择器
- 5、 属性选择器(css3)：属性匹配[att]、精确匹配[att=val]、多种匹配 [att~=valu]、开头匹配[att|=val]

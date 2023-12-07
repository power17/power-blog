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
- 6、伪类选择器：:link,:visited,:hover,:active,:foucs,:target,:nth-child,
- 7、伪元素: ::first-line,::first-letter, ::before, ::after
- 8、复合选择器： 空格：后代,">" 子代， "~": 后继兄弟（弟弟）, "+": 直接后继兄弟（弟弟） , "||": 列选择器

#### 2、2 优先级

- css 规则：（a,b,c）id:a, 伪类，class：b，伪元素和标签：c
- 行内属性永远高于 css 规则
- !important 优先级高于行内属性

### 2、3 排版

1. 正常流排版(文字排版需求): block inline inline-block

- inline：text-align， line-hight, vertical-align
- block: white-space, float, positon
- inline-block

2. 弹性布局
3. 网格布局

### 3、css 强大的属性

1. background

```css
/* - 直线: */
background: linear-gradient;
/* - 直径: */
background: radial-gradient;
/* - 角度: */
background: conic-gradient(#fff, #000);
/* 透明色： */
background: linear-gradient(90deg, #000, transparent);
/* 三角形： */
background: linear-gradient(45deg, #f00 0%, #f00 50%, transparent 50%, transparent 100%);
```

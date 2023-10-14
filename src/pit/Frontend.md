---
title: 前端相关
author: power
description: '记录自己踩过的坑'
date: 2023-10-08 11:34:19
link: ./pic/Frontend.md
tags:
  - 问题
---

# warning Delete `␍` prettier/prettier（eslint 配置的一些问题）

- 在 window 系统中，clone 代码下来，会自动把换行符 LF(linefeed character) 转换成回车符 CRLF(carriage-return character)。这时候我们本地的代码都是回车符。

```sh
npm run lint
# 可以使用git执行以下命令关掉自动转化（git默认是打开的）
git config --global core.autocrlf false
```

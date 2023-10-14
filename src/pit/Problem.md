---
title: 问题记录
author: power
description: '记录自己踩过的坑'
date: 2023-10-08 11:34:19
link: ./pic/Problem
tags:
  - 问题
---

# npm 设置代理后无法下载

- request to https://registry.npmjs.org/@commitlint/lint/-/lint-17.7.0.tgz failed, reason: connect ETIMEDOUT
  2606:4700::6810:1b22:443

```sh
# 1126是代理端口
npm config set proxy=http://127.0.0.1:1126
npm config set https-proxy http://127.0.0.1:1126

```

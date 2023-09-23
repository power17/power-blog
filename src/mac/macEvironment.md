---
title: mac开发配置
author: power
description: '作为一个前端开发工程师，搭建一个舒适的本地开发环境'
date: 2023-09-23 12:08:21
link: ./mac/macEvironment
tags:
  - mac
---

# {{$frontmatter.title}}

- {{$frontmatter.description}}

## 安装 iterm2

唤醒热键
给终端加一个快速唤醒/隐藏的快捷键是必须要做的，否则用鼠标找到终端的快捷方式再打开这种做法不仅慢而且逼格低，设置方式 iterm2 -> Preferences -> Keys -> Hotkey
![Alt text](./img/image.png)

### 个人喜好这里建议给 iterm2 配置一个透明度，看起来体验感舒适很多 iterm2 -> Preferences -> Profiles -> Window -> Transparency

### 快捷键使用

- ctrl + a/e 快速切换到当前正在输入的文本的头部／尾部
- ctrl + u 清空当前输入
- cmd + T 打开一个新的 iterm2 Tab
- cmd + 方向键 左右切换 Tab
- cmd + D 分屏
- cmd + K 清屏
- cmd + N 打开一个新的 iterm2 窗口

## 安装 zsh

```sh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# 更换主题
$ vim ~/.zshrc # 打开zsh配置文件
10 ZSH_THEME = "ys" # 在第10行设置当前主题为ys
$ source ~/.zshrc # 重新执行一遍zsh配置文件
```

# 安装插件

```sh
# 增加插件
vim ~/.zshrc
plugins = (
 git
 autojump
 zsh-autosuggestions
 zsh-syntax-highlighting
 last-working-dir
)
$ source ~/.zshrc
# 自动补全提示
git clone https://github.com/zsh-users/zsh-autosuggestions ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions
# 高亮git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting

source ~/.zshrc
```

## npm link

```sh
cd vue // 进入本地clone下来的vue文件夹
npm link // 如果没有全局安装过vue 此时会创建全局node_modules下的一个软链接vue指向本地clone的vue入口文件
npm link vue // 在需要用调试vue模块的应用执行该命令会将当前应用的node_modules/vue指向全局node_modules/vue软链接
```

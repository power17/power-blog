---
title: mysql基本操作
author: power
description: 首先声明mysql的版本是：8.0.33，系统操作是mac Monteron 12.3。内容是数据库的基本命令
date: 2023-09-22 12:42:44
link: ./databases/Mysql
tags:
  - 数据结构
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }}

### 数据库的连接

```sh
mysql --version
# 连接mysql
mysql -h 127.0.0.1 -u root -P 3334 -p
# 展示数据库
show databases;
```

### 数据库备份

- 全量备份脚本

```sh
#!/bin/bash

# 如果文件没有权限，提权
# chomd 777 ./bash.sh


#保存备份个数，备份31天数据
number=31

#备份保存路径(脚本当前目录)
backup_dir=__myslq_data

#日期
dd=`date +%Y-%m-%d-%H-%M-%S`

#备份工具
tool=mysqldump

#用户名
username=root

#密码
password=123456

#将要备份的数据库
database_name=baijiabao

#如果文件夹不存在则创建
if [ ! -d $backup_dir ];
then
    mkdir -p $backup_dir;
fi

#简单写法 mysqldump -h 127.0.0.1 -P 3334 -u root -p123456 users > /root/mysqlbackup/users-$filename.sql
$tool -u $username -h 127.0.0.1 -P 3334 -p$password $database_name > $backup_dir/$database_name-$dd.sql

#写创建备份日志
echo "create $backup_dir/$database_name-$dd.dupm" >> $backup_dir/log.txt

#找出需要删除的备份
delfile=`ls -l -crt $backup_dir/*.sql | awk '{print $9 }' | head -1`

#判断现在的备份数量是否大于$number
count=`ls -l -crt $backup_dir/*.sql | awk '{print $9 }' | wc -l`

if [ $count -gt $number ]
then
  #删除最早生成的备份，只保留number数量的备份
  rm $delfile
  #写删除文件日志
  echo "delete $delfile" >> $backup_dir/log.txt
fi

```

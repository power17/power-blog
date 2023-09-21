---
title: 链表
author: power
description: '链表通过指针将一组零散的内存块串联在一起。其中，我们把内存块称为链表的“结点”。'
date: 2023-09-21 10:58:00
link: ./algorithm/Array
tags:
  - 数据结构
---

{{ $frontmatter.description }}

```js
/**
 * 1）单链表的插入、删除、查找操作；
 * 2）链表中存储的是int类型的数据；
 */
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class LinkList {
  constructor() {
    this.head = new Node('head');
  }
  // 遍历
  forEach() {
    let currentNode = this.head.next;
    while (currentNode.next !== null) {
      console.log(currentNode.element);
      currentNode = currentNode.next;
    }
  }

  // 通过值查找
  findByValue(val) {
    let currentElement = this.head;
    while (currentElement.next !== null && currentElement.element !== val) {
      currentElement = currentElement.next;
    }
    return currentElement === null ? -1 : currentElement;
  }
  // 根据index查找节点，下标从0开始
  findByIndex(index) {
    let currentNode = this.head.next;
    let pos = 0;
    while (currentNode !== null && pos !== index) {
      currentNode = currentNode.next;
      pos++;
    }
    return currentNode === null ? -1 : currentNode;
  }
  // findPrev
  findPrev(item) {
    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.next.element !== item) {
      currentNode = currentNode.next;
    }
    return currentNode === null ? -1 : currentNode;
  }
  // create
  append(element) {
    let currentElement = this.head;
    const newNode = new Node(element);
    while (currentElement.next) {
      currentElement = currentElement.next;
    }
    currentElement.next = newNode;
  }
  insert(newValue, value) {
    const currentNode = this.findByValue(value);
    if (currentNode === null) {
      console.log('未找到该值');
      return -1;
    }
    const newNode = new Node(newValue);
    // insert
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }
  // delete
  remove(item) {
    const preNode = this.findPrev(item);
    if (preNode === -1) {
      console.log('未找到该值');
      return -1;
    }
    preNode.next = preNode.next.next;
  }
  removeByIndex(index) {
    let currentNode = this.head.next;
    let pos = 1;
    while (currentNode !== null && pos < index) {
      currentNode = currentNode.next;
      pos++;
    }
    if (currentNode !== null && currentNode.next !== null) {
      currentNode.next = currentNode.next.next;
    }
    console.log('无法删除最后一个节点或者该节点不存在');
    return false;
  }
  removeByEndIndex(index) {
    this.reverseList();
    this.removeByIndex(index);
    this.reverseList();
  }
  /**
   * 1) 单链表反转
   * 2) 链表中环的检测
   * 3) 两个有序的链表合并
   * 4) 删除链表倒数第n个结点
   * 5) 求链表的中间结点
   *
   */
  // 反转链表
  reverseList() {
    const root = new Node('head');
    let currentNode = this.head.next;
    while (currentNode !== null) {
      const next = currentNode.next;
      currentNode.next = root.next;
      root.next = currentNode;
      currentNode = next;
    }
    this.head = root;
  }

  // reverseList() {
  //   let currentNode = this.head.next;
  //   let previousNode = null;
  //   while (currentNode !== null) {
  //     const next = currentNode.next;
  //     currentNode.next = previousNode;
  //     previousNode = currentNode;
  //     currentNode = next;
  //   }
  //   this.head.next = previousNode;
  // }
  // 环检测
  checkCircle() {
    let fast = this.head.next;
    let slow = this.head;
    while (slow.next !== null && fast.next !== null && fast.next.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        return true;
      }
    }
    return false;
  }
  // 找中点
  findMiddleNode() {
    let slow = this.head;
    let fast = this.head;
    while (slow.next !== null && fast.next !== null && fast.next.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    console.log(slow);
    return slow;
  }
}
// Test
const LList = new LinkList();
LList.append(1);
LList.append(2);
LList.append(3);
LList.append(4); // chen -> curry -> sang -> zhao

// LList.insert(3, 5);

LList.forEach();
console.log(JSON.stringify(LList, null, 2));

LList.findMiddleNode();
// 删除
// LList.removeByIndex(2);
LList.removeByEndIndex(2);
// 反转
// LList.reverseList();
// 成环
// const lastElement = LList.findByIndex(3);
// lastElement.next = LList.head;
// console.log(LList.checkCircle(), lastElement);
```

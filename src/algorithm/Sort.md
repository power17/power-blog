---
title: 排序
author: power
description: '冒泡排序： 左右指针，右指针不断-1 重复直到 0

- 网上大部分都是双循环，用 i、j 表示不容易读。其实冒泡排序其实是右指针往回移动，每次左指针跑一遍将最大的排在最后面，'
date: 2023-09-21 11:12:29
link: ./algorithm/Sort
tags:
  - 数据结构
---

## 排序

{{ $frontmatter.description }}

```java
// java
package sandbox;
import java.util.Arrays;

// java
class Sort {
  public static void main(String[] args) {
    int[] arr = { 1, 2, 3, 4, 5, 6, 7 };
    int[] sortArr = sortArray(arr);
    System.out.println(Arrays.toString(sortArr));
  }

  public static int[] sortArray(int[] nums) { // 冒泡排序
    int right = nums.length - 1;
    for (int left = 0; left <= right; left++) {
      // 重置j和end指针
      if (left == right) {
        right = right - 1;
        left = 0;
      }
      // 交换
      if (nums[left] > nums[left + 1]) {
        int tem = nums[left];
        nums[left] = nums[left + 1];
        nums[left + 1] = tem;
      }
    }
    return nums;
  }
}
```

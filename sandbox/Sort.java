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
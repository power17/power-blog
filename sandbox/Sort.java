package sandbox;

import java.util.Arrays;

// java
class Sort {
  public static void main(String[] args) {
    int[] arr = { 1, 2, 3, 4, 5, 6, 7 };
    // 冒泡算法
    int[] sortArr = bubbleSort(arr);
    System.out.println(Arrays.toString(sortArr));
    // 归并算法
    int[] to_sort = { 3434, 3356, 67, 12334, 878667, 387 };
    int[] sorted = mergeSort(to_sort);
    System.out.println(Arrays.toString(sorted));
  }

  public static int[] bubbleSort(int[] nums) { // 冒泡排序
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

  /**
   * * @Description: 使用函数的递归（嵌套）调用，实现归并排序（从小到大）
   * * @param to_sort-等待排序的数组 * @return
   * int[]-排序后的数组
   */
  public static int[] mergeSort(int[] nums) {
    if (nums == null) {
      return new int[0];
    }
    if (nums.length == 1) {
      return nums;
    }
    // 将数组分成两半,递归调用
    int mid = nums.length / 2;
    int[] left = Arrays.copyOfRange(nums, 0, mid);
    int[] right = Arrays.copyOfRange(nums, mid, nums.length);
    left = mergeSort(left);
    right = mergeSort(right);

    return nums;

  }
}
package java基础练习;

import java.util.Arrays;
// import java.util.Scanner;

public class Lesson1 {

  public static void main(String[] args) {
    int[] nums = { 28, 12, 89, 73, 65, 18, 96, 50, 8, 36 };
    // 冒泡排序
    int end = nums.length - 1;

    for (int j = 0; j <= end; j++) {

      if (j == end) {
        end = end - 1;
        j = 0;
      }
      if (nums[j] > nums[j + 1]) {
        int tem = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = tem;
      }
    }
    return nums;

    // for (int i = 0; i < ns.length - 1; i++) {

    // }
    System.out.println(Arrays.toString(nums));

  }
}
package views.math.java基础练习;

import java.util.Arrays;
import java.util.Scanner;

public class Lesson1 {
  public static void main(String[] args) {
    // Scanner sc = new Scanner(System.in);
    // System.out.println("input you last score");
    // String score = sc.nextLine();
    // System.out.println(score);
    int[] ns = { 28, 12, 89, 73, 65, 18, 96, 50, 8, 36 };
    // 冒泡排序
    for (int i = 0; i < ns.length - 1; i++) {
      for (int j = 0; j < ns.length - 1 - i; j++) {
        if (ns[j] < ns[j + 1]) {
          int tem = ns[j];
          ns[j] = ns[j + 1];
          ns[j + 1] = tem;
        }
      }
    }
    System.out.println(Arrays.toString(ns));

  }
}
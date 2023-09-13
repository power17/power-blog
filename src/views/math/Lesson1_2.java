
// -- 二进制的移位操作
import java.math.BigInteger;

public class Lesson1_2 {
  public static int leftShift(int num, int m) {
    /**
     * @Description: 向左移位
     * @param num-等待移位的十进制数, m-向左移的位数
     * @return int-移位后的十进制数
     */
    // 左移
    return num << m;
  }

  /**
   * @Description: 向右移位
   * @param num-等待移位的十进制数, m-向右移的位数
   * @return int-移位后的十进制数
   */
  public static int rightShift(int num, int m) {
    // 右移
    return num >>> m;
  }

  public static void main(String[] args) {
    int num = 53;
    int m = 1;
    System.out.println(String.format("数字%d的二进制左移%d位后是%d", num, m, Lesson1_2.leftShift(num, m)));
    System.out.println(String.format("数字%d的二进制右移%d位后是%d", num, m, Lesson1_2.rightShift(num, m)));

  }
}

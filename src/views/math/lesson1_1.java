import java.math.BigInteger;

public class lesson1_1 {
  /**
   * @Description: 十进制转换成二进制
   * @param decimalSource
   * @return String
   */
  public static String decimalToBinary(int decimalSource) {
    BigInteger bi = new BigInteger(String.valueOf(decimalSource));// 转换成BigInteger类型，默认是十进制
    return bi.toString(2); // 参数2指定的是转化成二进制
  }
}
## 排序

冒泡排序： 左右指针，右指针不断缩小

```java
// java
class Solution {
    public int[] sortArray(int[] nums) {
    // 冒泡排序
    int end = nums.length - 1;
    for (int j = 0; j <= end; j++) {
      // 重置j和end指针
      if (j == end) {
        end = end - 1;
        j = 0;
      }
      // 交换
      if (nums[j] > nums[j + 1]) {
        int tem = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = tem;
      }
    }
    return nums;
    }
}
```

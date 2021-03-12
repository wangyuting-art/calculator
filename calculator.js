function calculate(NumberContent) {
    // 先判断是否有加减，再判断是否有乘除，这样输入的式子才可以先乘除后加减
    // 获得加号的位置
    var index = NumberContent.indexOf('+');
    //  加号存在，则这个判断句中进行逐层递归
    if (index > -1) {
      return calculate(NumberContent.substring(0, index)) + calculate(NumberContent.substring(index + 1));
    }
    // 当式子不再有加号时，会到这里
    index = NumberContent.lastIndexOf('-');
    if (index > -1) {
      return calculate(NumberContent.substring(0, index)) - calculate(NumberContent.substring(index + 1));
    }
    // 乘号
    index = NumberContent.indexOf('*');
    if (index > -1) {
      return calculate(NumberContent.substring(0, index)) * calculate(NumberContent.substring(index + 1));
    }
    // 除号
    index = NumberContent.lastIndexOf('/');
    if (index > -1) {
      return calculate(NumberContent.substring(0, index)) / calculate(NumberContent.substring(index + 1));
    }
    // 将结果转换为数字
    return Number(NumberContent);              
  }
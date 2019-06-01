[[[[[4]]]]] * 2   // 8

// js는 Array.prototype.toString이 Array.prototype.join인데
// join은 요소가 한개인 배열에 대해서는 사실상(String[arr[0]])으로 굴러가기때문에
// "4" * 2가 되고, *는 "4"를 숫자 4로 컨버젼한다.

[4] * 2   // 8
[4,] * 2  // 8
[4,5] * 2 // NaN
[4,].toString() * 2  // 8
[4,5].toString() * 2 // NaN
[4,5].toString() // '4,5'
[4].toString()   // '4'

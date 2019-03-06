// counter에 완전히 종속되므로 참조 투명하지 않음.
var counter = 0;

function increment() {
    return ++counter;
}

// 외부 변수를 제거하고 같은 입력에 같은 결과를 반환.
var increment = counter => counter + 1;

// sum, size 모두 참조 투명 함수.
var input = [80, 90, 100];
var average = (arr) => divide(sum(arr), size(arr));
// average(input);

// 입력값을 넣어도 됨.
// var average = divide(270, 3);

// 순수함수 전체 코드.
var sum = (total, current) => total + current;
// reduce는 누적해서 함수를 실행함. arr에 있는 값들을 누적해서 sum.
var total = arr => arr.reduce(sum);
var size = arr => arr.length;
var divide = (a, b) => a / b;
var average = arr => divide(total(arr), size(arr));
console.log(average(input));


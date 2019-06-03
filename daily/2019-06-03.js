// function declaration과 Arrow Function의 this 스코프 차이

// ---------------------------------
// function(){}방식으로 호출할 때
function objFunction() {
  console.log('Inside `objFunction`:', this.foo);
  return {
    foo: 25,
    bar: function () {
      console.log('Inside `bar`:', this.foo);
    },
  };
}

objFunction.call({
  foo: 13
}).bar(); // objFunction의 `this`를 오버라이딩합니다.

// 결과
// Inside `objFunction`: 13 // 처음에 인자로 전달한 값을 받음
// Inside `bar`: 25 // 자신이 있는 Object를 this로 인지해서 25를 반환

// ------------------------------
// Arrow Function방식으로 호출할 때
function objFunction() {
  console.log('Inside `objFunction`:', this.foo);
  return {
    foo: 25,
    bar: () => console.log('Inside `bar`:', this.foo),
  };
}

objFunction.call({
  foo: 13
}).bar(); // objFunction의 `this`를 오버라이딩합니다.

// 결과
// Inside `objFunction`: 13 // 처음에 인자로 전달한 값을 받음
// Inside `bar`: 13 // Arrow Function에서 this는 일반 인자로 전달되었기 때문에 이미 값이 13로 지정됩니다.

// Arrow Function은 this 바인딩을 갖지 않습니다. 기존의 function에서 this의 탐색 범위가 함수의 {} 안에서 찾은 반면 Arrow Function에서 this는 일반적인 인자/변수와 동일하게 취급됩니다
// curry
function curry(f) {
  return (a, ..._) => _.length < 1 ? (..._) => f(a, ..._) : f(a, ..._);
}

// 외부 자원을 상대로 읽고 쓰는 함수는 부수효과를 동반함.
var counter = 0;
function increment() {
  return ++counter;
}

// 외부 자원에 의존하므로 코드가 유연하지 않고 테스트 역시 어려움.
function showStudent(ssn) {
  let student = db.find(ssn);
  if (student !== null) {
    document.querySelector(`#${elementId}`).innerHTML =
      `${student.ssn},
      ${student.firstname},
      ${student.lastname}`;
  }
  else {
    throw new Error('학생을 찾을 수 없습니다!');
  }
}

showStudent('444-44-4444');

// currying : 함수의 여러 인수를 부분적으로 나누어(find, append) 세팅.
var find = curry((db, id) => {
  let obj = db.find(id);
  if (obj === null) {
    throw new Error('객체를 찾을 수 없습니다!');
  }
  return obj;
});

var csv = student =>
  `${student.ssn}, ${student.firstname}, ${student.lastname}`;

var append = curry((selector, info) => {
  document.querySelector(selector).innerHTML = info;
});

// test1
add = (a, b) => a + b
curriedAdd = a => b => a + b

console.log(add(5, 6) === 11)
console.log(curriedAdd(5)(6) === 11);

// test2
function volume(l, w) {
  return l * w;
}

var curried = curry(volume);

console.log(curried(1)(2)); // 6
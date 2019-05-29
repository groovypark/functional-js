// call, apply 함수

// call
// call 메소드는 다른 객체 대신 메소드를 호출하는데 사용됩니다. 이 메서드를 사용하여 함수의 this 객체를 원래 컨텍스트에서 thisObj로 지정된 새객체로 변경할 수 있습니다.

// apply
// call 메소드와 동일 하나, call 메소드는 인자 하나 하나를, apply는 인자 리스트를 전달합니다.

type = "zero";
var type1 = { type: "one" };
var type2 = { type: "two" };

function setType(type) {
  this.type = type;
}

function getType() {
  console.log(this.type);
}

getType();
getType.call(this);
getType.call(type1);
getType.call(type2);

// call에 인자로 this를 넘겨줌으로, this에 값에 따라 getType 함수 안에서 출력되는 this.type의 값이 달라지는 것을 확인 할 수 있습니다.

setType("_zero");
getType();

setType.call(this, "__zero");
getType.call(this);

setType.call(type1, "_one");
getType.call(type1);

setType.call(type2, "_two");
getType.call(type2);


// 출처: https://beomy.tistory.com/4
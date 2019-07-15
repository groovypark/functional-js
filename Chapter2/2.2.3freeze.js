// Person -> Address -> zipCode 구조일 때,
// Person 형을 동결해도 (_address 같은) 내부 객체 속성까지는 동결되지 않으므로 person.adress.contry 값은 언제든지 바꿀 수 있습니다.
// 이렇게 최상위 객체만 동결되는 것을 얕은 동결(shallow freeze)이라고 합니다.
// Object.freeze()는 얕은 연산이라서 확실히 동결하고 싶은 땐 다음 코드처럼 한 객체의 중첩 구조를 일일이 수작업으로 동결해야 합니다.

// 재귀 함수로 객체를 깊이 동결함
var Object = (val) => val && typeof val === 'object';

function deepFreeze(obj) {
  if (isObject(obj)
    && !Object.isFrozen(obj)) {

      Object.keys(obj).   // 모든 속성을 하나씩 반복하며 동결되지 않은 속성에 Object.freeze()를 재귀 호출합니다(map 함수는 3장에서 설명)
        forEach(name => deepFreeze(obj[name]));   // 자기 자신을 재귀 호출합니다(재귀는 3장에서)

      Object.freeze(obj);   // 루트 객체를 동결합니다.
  }
  return obj;
}
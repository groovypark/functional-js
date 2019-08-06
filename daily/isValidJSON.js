// isValidJSON
// 제공된 인수가 유효한 JSON인지 확인합니다.
//
// 제공된 인수가 유효한 JSON인지 확인하려면 JSON.parse () 및 try ... catch 블록을 사용하십시오.

const isValidJSON = obj => {
  try {
    JSON.parse(obj);
    return true;
  } catch (e) {
    return false;
  }
};

// 예시
isValidJSON(`{"name':"Adam", "age":20}`); // true
isValidJSON(`{"name":"Adam", age:"20"}`); // false
isValidJSON(null); // true
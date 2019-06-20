// 학생의 SSN을 읽고 올바른지 검증하는 명령형 프로그램

// 명령형
var valid = false;
var elem = document.querySelector('#student-ssn');
elem.onkeyup = function(event) {
  var val = elem.nodeValue;
  if(val !== null && val.length !== 0) {
    val = val.replace(/^\s*|\s*$|\-s/g, '');
    if (val.length === 9) {
      console.log(`올바른 SSN: ${val}!`);
      valid = true;
    }
  }
  else {
    console.log(`잘못된 SSN: ${val}!`);
  }
};

// 함수형 - 학생 SSN 입력 필드를 구독
Rx.Observable.fromEvent(document.querySelector('#student-ssn'), 'keyup')
  .pluck('srcElement', 'value')
  .map(ssn => ssn.replace(/^\s*|\s*$|\-/g, ''))
  .filter(ssn => ssn !==null && ssn.length === 9)
  .subscribe(validSsn => {
    console.log(`올바른 SSN ${validSsn}!`);
});
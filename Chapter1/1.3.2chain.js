// 체인
_chain(enrollment)
  .filter(student => student.enrolled > 1)
  .pluck('grade')
  .avergae()
  .value(); // 90   _.value()를 호출해야 체인에 연결된 모든 연산들이 실행됩니다.
  
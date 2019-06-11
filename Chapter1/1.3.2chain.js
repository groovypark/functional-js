let enrollment = [
  {enrolled: 2, grade: 100},
  {enrolled: 2, grade: 80},
  {enrolled: 1, grade: 89}
];

// 명령형
var totalGrades = 0;
var totalStudentsFound = 0;
for (let i = 0; i < enrollment.length; i++) {
  let student = enrollment[i];
  if (student !== null) {
    if (student.enrolled > 1) {
      totalGrades += student.grade;
      totalStudentsFound++;
    }
  }
}
var avergae = totalGrades / totalStudentsFound; // 90

// 체인
_chain(enrollment)
  .filter(student => student.enrolled > 1)
  .pluck('grade')
  .avergae()
  .value(); // 90   _.value()를 호출해야 체인에 연결된 모든 연산들이 실행됩니다.

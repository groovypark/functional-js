var sortDesc = arr => {
    arr.sort(
        // 내림차순
        (a, b) => b - a
    );
    return arr
};

var arr = [1,2,3,4,5,6,7,8,9];
console.log(sortDesc(arr));
console.log(arr);



// 부수효과와 무관해 보이지만, Array.sort는 원본 레퍼런스가 가리키는 배열의 원소를 정렬함.

// 함수형 프로그래밍은, 외부에서 관찰 가능한 부수효과가 제거된 불변 프로그램을 작성하기 위해 순수함수를 선언적으로 평가하는 것.
// 함수를 데이터를 절대 변경하지 않는 고정된 작업 단위로 바라봐야 함.

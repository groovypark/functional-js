// 합성
const compose = (...fns) =>
  fns.reduceRight((prevFn, nextFn) =>
    (...args) => nextFn(prevFn(...args)),
    value => value
    );

// var showStudent = compose(append('#student-info'), csv, find(db));

// test
const f1 = () => console.log(1);
const f2 = () => console.log(2);
const f3 = () => console.log(3);
compose(f1(), f2(), f3());
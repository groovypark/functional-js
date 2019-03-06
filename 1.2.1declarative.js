function print(data) {
    console.log(data);
}

const list = [0,1,2,3,4,5,6,7,8,9].map(
    function(num) {
        return Math.pow(num,2);
    }
);

const list2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => Math.pow(num, 2));

print(list2);


let arrOne = [1, 10, 100, 1000];
let arrTwo = [2, 20, 200, 2000];

let maxNumber = (a, b) => Math.max(...a, ...b);

console.log(maxNumber(arrOne, arrTwo))

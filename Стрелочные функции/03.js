/*function sumAll(...args) { // args — имя массива
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}
*/
let newArray = [1];

let sumAll = (...args) => {
    let sum = 0;
    for (let arg of args) {
        sum += parseInt(arg);
    }

    return sum;
}
console.log(sumAll(newArray, 23, 34))


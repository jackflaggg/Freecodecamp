/*сОРТИРОВАТЬ В ПОРЯДКЕ УБЫВАНИЯ*/

let arr = [5, 2, 1, -10, 8];
arr.sort((elementOne, elementTwo) => elementTwo - elementOne )
console.log( arr ); // 8, 5, 2, 1, -10
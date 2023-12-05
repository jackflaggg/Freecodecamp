let numbers = [1, 2, 3, 4, 5];

let doubledNumbers = numbers.map(item => item * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
console.log(numbers);

let numbers2 = [1, 2, 3, 4, 5];

let evenNumbers = numbers2.filter(item => item % 2 === 0);
console.log(evenNumbers); // [2, 4]
/*Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.*/
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

function sortByAge(users){
    return users.sort((itemOne, itemTwo) => itemOne.age > itemTwo.age ? 1 : -1)
}

sortByAge(arr);

console.log(arr[0].name); // Вася
console.log(arr[1].name); // Маша
console.log(arr[2].name); // Петя


/*Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.*/

function getAverage(users){
    let sum = 0;
    for (const user of users) {
        sum += user.age;
    }
    return console.log(Math.floor(sum/users.length));
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };
let pasha = { name: "Паша", age: 98 };
let dasha = { name: "Маша", age: 19 };

let arr = [ vasya, petya, masha, pasha, dasha ];

getAverage(arr)
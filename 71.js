/*Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0.*/

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (const salariesKey in salaries) {
    if (typeof salaries[salariesKey] === 'number'){
        sum += salaries[salariesKey];
    } else {
        sum = 0;
    }
}
console.log(sum)
/*function sumSalaries(obj){
    let sum = 0;
    for (const objKey in Object.values(obj)) {
        sum += obj[objKey];
    }
    return console.log(sum);
}
sumSalaries(salaries)*/
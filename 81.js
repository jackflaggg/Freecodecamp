/*Напишите функцию, которая возвращает вложенный массив вида [[key, value], [key, value]].*/
const arr = { a: 1, b: 2 }
function arrReturn(obj){
    return Object.entries(obj);
}

console.log(arrReturn(arr))
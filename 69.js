// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

function isEmpty(obj){
    return Object.keys(obj).length === 0;
}
let user = {name: 'Rasul'}
console.log(isEmpty(user))
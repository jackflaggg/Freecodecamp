/*Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.*/

function camelize(str) {
    let splitPerem = str.split('-');
    let modifiedArray = splitPerem.map(item => {
        if (typeof item === 'string' && item && item !== splitPerem[0][0]) {
            return item[0].toUpperCase() + item.substring(1, item.length);
        }
    });

    return modifiedArray.join('');
}

console.log(camelize('background-color'));


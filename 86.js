/*Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».*/

function sumInput() {
    const numbers = [];
    let valueNew = true;
    let sum = 0;

    while (valueNew) {
        const input = +prompt("Введите число", 0);

        if (!isNaN(input) && input !== false) {
            numbers.push(input);
        } else {
            valueNew = false;
        }
    }

    for (const number of numbers) {
        sum += number;
    }

    return console.log(sum);
}

sumInput();
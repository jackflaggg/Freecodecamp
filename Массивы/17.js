/*Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

Многократные прогоны через shuffle могут привести к разным последовательностям элементов.*/

function shuffle(array) {
    const shuffledArray = [...array]; // Создаем копию исходного массива
    const length = shuffledArray.length;

    for (let i = length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Обмен значениями между текущим и случайно выбранным индексами
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}

console.log(shuffle([1, 2 , 3]))
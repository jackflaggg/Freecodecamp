// Удали все нечетные цифры в двухмерном массиве.
// Полученный результат выведи в консоль

const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];


function ArrChemb(arr) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (numbers[i][j] % 2 === 0){
                newArray.push(numbers[i][j])
            }
        }
    }
    return console.log(newArray)
}

ArrChemb(numbers)
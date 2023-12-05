/*Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив
arr и удаляет из него все значения кроме тех, которые находятся между a и b.
То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.*/

/*НЕ РЕШИЛ!*/
function filterArray(arr, a, b) {
    arr.forEach((element) => element > a || element < b).splice(0, 1)
}
/*function filterRangeInPlace(arr, a, b){
   // const copy = [];
    arr.forEach((item) =>{
        if (item >= a && item <=b){
            item.pop()
        }
    })
    return copy
}*/

filterArray([5, 3, 8, 1], 1, 4)
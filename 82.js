/*IsEqual. Напишите функцию, которая поверхностно сравнивает два объекта.*/

const arrOne = {
    a: 1,
    b: 2,
};

const arrTwo = {
    a: 1,
    b: 2,
};

const ArrThree = {
    a: 2,
    b: 2,
}

function isEgual(objOne, objTwo){
    let items = 0;
    for (const objOneKey in objOne) {
        for (const objTwoKey in objTwo) {
            if (objOneKey === objTwoKey && objOne[objOneKey] === objTwo[objTwoKey]){
                items++;
                break;
            }
        }
    }
    return items >= Object.keys(objOne).length && items >= Object.keys(objTwo).length;
}

console.log(isEgual(arrOne,arrTwo))
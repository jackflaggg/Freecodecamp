function filterRange(arr, a, b){
    const copy = [];
    arr.forEach((element) => {
        if (element >= a && element <= b){
            copy.push(element);
        }
    });
    return copy
}

function filterRangeTwo(arr, a, b){
    return arr.filter((element) => element >= a && element <= b);
}

console.log(filterRange([5, 3, 8, 1], 1, 4))
console.log(filterRangeTwo([5, 3, 8, 1], 1, 4))
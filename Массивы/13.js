let names = '1 и -5.8 или 10 хотя 34 + -5.3 и 73 and 54545';

function getMinMax(str){
    let arr = str.split(' ').map(item => parseFloat(item)).filter(item => !isNaN(item));
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return {max, min};
}

console.log(getMinMax(names))
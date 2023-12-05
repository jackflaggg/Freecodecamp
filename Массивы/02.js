let arr = "-webkit-transition";

let modifiedArr = arr.split('-').map(item => {
    return (typeof item === 'string' && item && item !== arr.split('-')[0]) ? item[0].toUpperCase() + item.substring(1, item.length) : item;
}).join('');

console.log(modifiedArr)

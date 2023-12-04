let arr = "-webkit-transition";
let splitStr = arr.split('-');
let modifiedArr = splitStr.map(item => {
    return (typeof item === 'string' && item.length > 0 && item !== splitStr[0]) ? item[0].toUpperCase() + item.substring(1, item.length) : item;
}).join('');

console.log(modifiedArr);
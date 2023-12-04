let zapros = (a, b) => {
    a = +prompt('Введи числовое значение: ', 0);
    b = +prompt('Введи числовое значение: ', 0);
    return (a !== 0 && b !== 0) ? a * b : a;
}

let result = zapros();
alert(result)
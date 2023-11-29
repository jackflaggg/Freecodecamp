/*Калькулятор:

Создайте объект calculator с методами add, subtract и multiply, которые принимают
два числа и выполняют соответствующие операции.
Каждый метод должен использовать свойство this объекта calculator для выполнения операции.*/

let calculator = {
    add(a, b){
        this.a = a;
        this.b = b;
        return a + b;
    },
    subtract(a, b){
        return a >= b ? this.a - this.b : this.b - this.a;
    },
    multiply(a, b){
        return (a !== 0 && b !== 0) ? this.a * this.b : console.log("ERROR")
    },
};

console.log(calculator.add(19, 121));
console.log(calculator.subtract(19, 121));
console.log(calculator.multiply(19, 121));
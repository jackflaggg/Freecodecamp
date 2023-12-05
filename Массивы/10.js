/*Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

Задание состоит из двух частей.

Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2"
в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат.
Метод должен понимать плюс + и минус -.
Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые
операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

* Для этой задачи не нужны скобки или сложные выражения.
* Числа и оператор разделены ровно одним пробелом.
* Не лишним будет добавить обработку ошибок.
*/

function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function(str) {
        const parts = str.split(' ');
        const a = parseInt(parts[0]);
        const operator = parts[1];
        const b = parseInt(parts[2]);

        if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
            console.log('Неверное выражение или оператор');
        }

        return this.methods[operator](a, b);
    };

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

// Пример использования
let calc = new Calculator();
console.log(calc.calculate("3 + 7"));  // Output: 10
console.log(calc.addMethod('*', (a, b) => a * b))
console.log(calc.calculate("3 * 7"))

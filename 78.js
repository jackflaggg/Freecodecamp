/*Корзина покупок:

Создайте объект cart с методами addItem и calculateTotal, которые добавляют товары в корзину и вычисляют общую стоимость соответственно.
Используйте свойство this.items для хранения товаров корзины.
Метод addItem должен принимать объект товара с свойствами name (название товара) и price (цена товара) и добавлять его в корзину.
Метод calculateTotal должен перебирать товары в корзине и вычислять общую стоимость.*/

let cart = {
    items: [],
    addItem(item){
        return this.items.push(item);
    },
    calculateTotal(){
        let sum = 0;
        for (const item of this.items) {
            if (typeof item['price'] === 'number'){
                sum += item['price'];
            }
        }
        return console.log(sum);
        }
};

cart.addItem({ name: 'Футболка', price: 20 });
cart.addItem({ name: 'Джинсы', price: 50 });
cart.calculateTotal(); // Возвращает 70

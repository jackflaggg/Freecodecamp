/*Создайте функцию showSalary, которая принимает массив пользователей users
 и максимальный возраст age и возвращает строку с именами и зарплатами
 пользователей, у которых возраст меньше или равен параметру age.*/

function showSalary(users, age){
    return users.filter(item => item.age <= age).map(user => `${user.name}, ${user.balance}`).join('\n');
}

let user1 = {
    "balance": "$1,825.65",
    "picture": "https://placehold.it/32x32",
    "age": 21,
    "name": "Golden Branch",
    "gender": "male",
    "greeting": "Hello, Golden Branch! You have 7 unread messages.",
    "favouriteFruit": "banana"
};

let user2 = {
    "balance": "$3,825.65",
    "picture": "https://placehold.it/52x52",
    "age": 43,
    "name": "Duncan Randall",
    "gender": "male",
    "greeting": "Hello, Duncan Randall! You have 7 unread messages.",
    "favouriteFruit": "banana"
};

let user3 = {
    "balance": "$5,825.65",
    "picture": "https://placehold.it/45x45",
    "age": 9,
    "name": "Pony",
    "gender": "male",
    "greeting": "Hello, Pony! You have 7 unread messages.",
    "favouriteFruit": "banana"
};

let users = [user1, user2, user3];

console.log(showSalary(users, 21))
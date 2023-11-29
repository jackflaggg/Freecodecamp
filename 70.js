let user = {
    name: "John",
    age: 30
};

// Object.values для того, чтоб объект стал перебираемым объектом
for (let value of Object.entries(user)) {
    console.log(value); // John, затем 30
}
const myPromise = new Promise((resolve, reject) => {
    /*
    *Выполнение асинхронных действий
    *
    * Внутри этой функциинужно в результате вызвать одну из функций resolve или reject
    *
    */
});

myPromise
    .then(value => {
        /*
        * Дуйствие в случае успешного исполнения промиса
        * Значение value - это значение, переданное в вызове функции resolve внутри Промиса
        */
    })
    .catch(error => {
        /*
        * Действие в случае отклонения Промиса
        * Значение error - это значение, переданное в вызове функции reject внутри Промиса
        */
    });
fetch('https://jsonplaceholder.typicode.com/todos/55')
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(json => console.log(json))
.catch(error => console.error(error))
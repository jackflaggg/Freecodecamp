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
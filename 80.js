
let ask = (question, yes, no) => (question) ? yes() : no();

ask("Вы согласны?",
    () => console.log("Вы согласились."),
    () => console.log("Вы отменили выполнение."))

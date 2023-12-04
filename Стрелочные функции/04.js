/*function showName(firstName, lastName, ...titles) {
    alert( firstName + ' ' + lastName ); // Юлий Цезарь

    // Оставшиеся параметры пойдут в массив
    // titles = ["Консул", "Император"]
    alert( titles[0] ); // Консул
    alert( titles[1] ); // Император
    alert( titles.length ); // 2
}

showName("Юлий", "Цезарь", "Консул", "Император");*/

let showName = (firstName, lastName, ...titles) => {
    console.log( firstName + ' ' + lastName ); // Юлий Цезарь
    console.log( titles[0] ); // Консул
    console.log( titles[1] ); // Император
    console.log( titles.length ); // 2
}
showName('Rasul', 'Khamzin', 'брат', 54)
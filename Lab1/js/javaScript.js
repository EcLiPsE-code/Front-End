"use strict";

function setNullFirstValue(value) {
    if (value < 10){
        value = '0' + value;
    }
    return value;
}
function currentDate() {
    let date = new Date();
    let day = setNullFirstValue(date.getDay());
    let month = setNullFirstValue(date.getMonth());
    let year = date.getFullYear();
    let hours = setNullFirstValue(date.getHours());
    let minutes = setNullFirstValue(date.getMinutes());
    let seconds = setNullFirstValue(date.getSeconds());

    return "Сегодня: " +day+"-"+month+"-"+year+" Текущее время: " +hours+ ":" +minutes+":" +seconds+ "";
}
setInterval(function () {
    document.getElementById('dateDocument').innerHTML = currentDate();
}, 1000);
let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
];

let user = users.find(item => item.id == 1);

alert(user.name); // Вася





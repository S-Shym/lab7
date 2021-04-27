let fnshed = function (begin, end) { // створюємо функцію
    let dt = new Date(); // створюємо дату
    let msg = dt.toLocaleString(); // перетворюємо дату в строку
    if (dt.getTime()>=end.getTime()){ // якщо теперішня дата => кінцевий даті, то виконується наступне
        clearTimeout(htmr); //очищаємо інтервал функцію
        msg = msg + ": Подію зупинено"; // створюємо повідомлення
    }
    else if (dt.getTime()>=begin.getTime()) {
        msg = msg + ": Подія працює";
    }
    console.log(msg); // виводимо повідомлення у консоль
}
let now = new Date(); // створюємо нову дату
let begin = new Date(now.getTime() + 3000); // створюємо нову дату + 3 секунди
let end = new Date(now.getTime() + 8000); //створюємо нову дату + 8 секунд
htmr = setInterval(fnshed, 1000, begin, end); // створюємо інтервал функцію
console.log (now.toLocaleString () + "Планувальник запущено:"); // виводимо повідомлення у консоль
console.log("- початок дії о " + begin.toLocaleString()); // виводимо повідомлення у консоль
console.log("- кінець дії о " + end.toLocaleString()); // виводимо повідомлення у консоль
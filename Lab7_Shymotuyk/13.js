let now = new Date();
let shedevt = {
    tbegin: new Date(now.getTime()+ 5000), //дата/час початку події
    tend: new Date (now.getTime() + 10000), //дата/час конця події
    topic: "lamp", //адресат для події
    cmdbegin: "on", // команда на виконання для початку події
    cmdend: "off", //команда на виконання для кінця події
};

let fnshed = function (){
    let dt = new Date();
    msgtxt = dt.toLocaleString();
    let msg = {};
    //цю умову треба проаналізувати  і прокоментувати
    if (dt.getTime()>=shedevt.tend.getTime()) { //якщо теперішня дата більше рівна даті об'єкта (+10 секунд), то виводимо наступне
        clearTimeout(htmr); //очищуємо інтервал
        msgtxt = msg.msgtxt + ": Подію зупинено"; //виводимо повідомлення
        shedevt.started = false; //прапорець, що повідомляє у payload
        msg.payload = shedevt.cmdend; //передаємо повідомлення у payload
        msg.topic = shedevt.topic; //передаємо повідомлення у topic
        console.log (msg); //виводимо повідомлення у console
    }
    //цю умову треба проаналізувати і прокоментувати
    else if ((dt.getTime()>=shedevt.tbegin.getTime()) && (!shedevt.started)) { //якщо дата більша рівна початку події та подія не зупинена
        msgtxt = msg.msgtxt + ": Подію запущено";
        msg.payload = shedevt.cmdbegin;
        msg.topic = shedevt.topic;
        shedevt.started = true; // прапорець, що подія зараз працює
        console.log(msg);
    }
    console.log(msgtxt);
}
htmr = setInterval(fnshed, 1000);
console.log (now.toLocaleString () + " Планувальник запущено");
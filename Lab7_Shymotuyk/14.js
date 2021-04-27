let now = new Date(); //створює нову дату
let scheduler = []; //створює пустий массив
scheduler.push({ //передає значення у масив
    tbegin: new Date(now.getTime()+ 5000), 
    tend: new Date (now.getTime() + 10000), 
    topic: "lamp1", cmdbegin:"on", cmdend:"off" 
});
scheduler.push({ //передає значення у масив
    tbegin: new Date(now.getTime()+ 6000), 
    tend: new Date (now.getTime() + 8000),
    topic: "lamp2", cmdbegin:"on", cmdend:"off"
});
scheduler.push({ //передає значення у масив
    tbegin: new Date(now.getTime()+ 3000),
    tend: new Date (now.getTime() + 9000),
    topic: "power", cmdbegin:"85", cmdend:"0"
});
for (let schedevt of scheduler) { //проходить по всім значенням масива
    console.log (schedevt.topic);
}
let fnshed = function () { //створює функцію
    let dt = new Date(); //створює дату
    msgtxt = dt.toLocaleString(); //виводить дату у текстовому форматі
    console.log (msgtxt);
    for (let schedevt of scheduler) checkshed (schedevt); //після циклу використовується функція та передаються туди значення
    for (let i = 0; i < scheduler.length; i++) { //проходить циклом по всім елементам масиву scheduler
        if (dt.getTime() > scheduler[i].tend.getTime()){ //якщо час рівний часу одного з елементів масиву, виконується наступне
            console.log (scheduler[i].topic);
            scheduler.splice(i,1); //видаляє елемент масиву
        }
    }
    if (scheduler.length === 0) clearTimeout(htmr); //якщо довжина масиву рівна нулю, то очищає timeout функцію
}
function checkshed (shedevt) { //створює нову функцію
    let dt = new Date(); //створює нову дату
    let msg = {}; 
    if (dt.getTime()>=shedevt.tend.getTime()) { //якщо час рівний часу значення, що передається, то виконується наступне
        if (shedevt.started){ //якщо значення розпочато, то
            shedevt.started = false; //прапорець, що подія зараз не працює
            msg.payload = shedevt.cmdend; 
            msg.topic = shedevt.topic; 
            console.log ("Подію для "  + msg.topic + " зупинено "); //виводить повідомлення у console
        }
    }    
    else if ((dt.getTime()>=shedevt.tbegin.getTime()) && (!shedevt.started)) { //інакше якщо теперішня дата та час рівні даті та часу початку події(час запуску +5 секунд) і подія не запущена, то виконується наступне
        msgtxt = msg.msgtxt + ": Подію запущено"; //створюється повідомлення msg.msgtxt + ": Подію запущено" 
        msg.payload = shedevt.cmdbegin; 
        msg.topic = shedevt.topic; 
        shedevt.started = true; //прапорець, що подія зараз працює
        console.log ("Подію для "  + msg.topic + " запущено"); //виводить повідомлення у console
    }
}    
htmr = setInterval(fnshed, 1000); //запускає інтервал функцію
console.log (now.toLocaleString () + " Планувальник запущено"); //виводить повідомлення у console
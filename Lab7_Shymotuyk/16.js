let now = new Date();
let strtday = new Date(now.toDateString());
let delta = now.getTime() - strtday.getTime();//кількість мілісекунд з початку доби
let scheduler = [];
scheduler.push({
    tbegin: delta + 5000, //кількість мілісекунд з початку доби + 5000 мс
    tend: delta + 10000, 
    topic: "lamp1", cmdbegin:"on", cmdend:"off"	
});
scheduler.push({
    tbegin:delta + 6000, 
    tend: delta + 8000,
    topic: "lamp2", cmdbegin:"on", cmdend:"off"
});
scheduler.push({
    tbegin: delta + 3000,
    tend: delta + 9000,
    topic: "power", cmdbegin:"85", cmdend:"0"	
});

//пам'ятайте, що об'єкти передаються за посиланнями а не за значенням
function daytoshed (scheduler ){
    let strtday = new Date(now.toDateString());
    for (let schedevt of scheduler) {
        schedevt.tbegin = new Date (strtday.getTime() + schedevt.tbegin);
        schedevt.tend = new Date (strtday.getTime() + schedevt.tend);    
    }    
}
daytoshed (scheduler);
for (let schedevt of scheduler) {
    console.log (schedevt.tbegin);
    console.log (schedevt.tend);         
} 
let fnshed = function () {
    let dt = new Date();
    msgtxt = dt.toLocaleString();
    console.log (msgtxt);
    for (let schedevt of scheduler) checkshed (schedevt);
    for (let i = 0; i < scheduler.length; i++) {
        if (dt.getTime()> scheduler[i].tend.getTime()){
            console.log (scheduler[i].topic);
            scheduler.splice(i,1);
        }
    }
    if (scheduler.length === 0) clearTimeout(htmr);         
}

function checkshed (shedevt) {
    let dt = new Date();
    let msg = {};
    if (dt.getTime()>=shedevt.tend.getTime()) {
        if (shedevt.started){
            shedevt.started = false; 
            msg.payload = shedevt.cmdend;
            msg.topic = shedevt.topic;
            console.log ("Подію для "  + msg.topic + " зупинено ");
        }        
    }    
    else if ((dt.getTime()>=shedevt.tbegin.getTime()) && (! shedevt.started)) {
        msg.payload = shedevt.cmdbegin;
        msg.topic = shedevt.topic;
        shedevt.started = true; 
        console.log ("Подію для "  + msg.topic + " запущено");  
    }
}    
htmr = setInterval(fnshed, 1000);
console.log (now.toLocaleString () + " Планувальник запущено");
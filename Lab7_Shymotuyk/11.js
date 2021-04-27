function getDifferenceDate(DT1, DT2) {
    const date1 = new Date(DT1);
    const date2 = new Date(DT2);
    const difference = date2 - date1;
    const seconds = difference / 1000;
    const minutes = (difference / 1000) / 60;
    const hours = minutes / 60;
    const era = hours / 24;
    const message = {
     totaltime: Math.fround((date2.getTime() - date1.getTime()) / 1000)
    }
    message.days = Math.floor(message.totaltime/(60*60*24));
    message.hours = Math.floor(message.totaltime/(60*60)) % 24;
    message.minutes = Math.floor(message.totaltime/(60)) % 60;
    message.seconds = message.totaltime % 60;
    return message;
   }
   console.log(getDifferenceDate('10.06.2003 09:15:00', '01.01.2021 00:00:00'));
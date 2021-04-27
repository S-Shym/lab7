let now = new Date();                     //плинне значення
let tssp = new Date(now.getTime()- 5000); //задане значення
console.log ("Зараз - \t\t" + now.toLocaleString());
console.log ("5 секунд назад було \t" + tssp.toLocaleString());

let ny = new Date(now.getFullYear() + ", 1, 1 00:00:00"); //дата та часу нового року
let fromny = {
    //кількість секунд з нового року
    totalsec: Math.fround((now.getTime() - ny.getTime())/1000)
}; 
console.log (now.getTime());
//поділено на кількість секунд за добу
fromny.days = Math.floor(fromny.totalsec/(60*60*24));
//остача від ділення кількості годин з НР на 24 
fromny.hours = Math.floor(fromny.totalsec/(60*60)) % 24;
//остача від ділення кількості хивлин з НР на 60
fromny.mins = Math.floor(fromny.totalsec/(60)) % 60;
//остача від ділення кількості секунд з НР на 60
fromny.seconds = fromny.totalsec % 60;        
console.log ("З нового року пройшло \t" + fromny.days + " днів, " + fromny.hours + " годин," + fromny.mins + " хвилин, " + fromny.seconds + " секунд.");
//1) "new Date()" - створення нової дати
//   "getTime()" - повертає кількість мілісекунд з початку 
//   "toLocaleString()" - повертає рядкове представлення дати 
//   "getFullYear()" - повертає рік вказаної дати
//   "Math.floor()" - повертає найбільше ціле число, менше або рівне даному числу
//2) Для розрахунку часу нового року отримуємо рік поточної дати та додаємо до нього перший місяць, перший день і нульовий час
//3) "\t" - це горизонтальна табуляція 
//4) "%" - це остача від ділення
//5) Неспівпадіння 1 година 
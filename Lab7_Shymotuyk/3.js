const firstName = 'Сергій',
lastName = 'Шимотюк', 
nick  = 'S-Shym', 
age = 17, 
weight = 60, 
height = 1.78, 
birthday ='', 
marital = false;
console.log(typeof(firstName)); //вивело "string"
console.log(typeof(lastName)); //вивело "string"
console.log(typeof(nick)); //вивело "string"
console.log(typeof(age)); //вивело "number"
console.log(typeof(weight)); //вивело "number"
console.log(typeof(height)); //вивело "number"
console.log(typeof(birthday)); //вивело "string"
console.log(typeof(marital)); //вивело "boolean"
console.log('\n');
const heightcm = height * 100;
console.log(heightcm); //вивело "178"
console.log('\n');
console.log('Привіт! Мене звати ' + firstName + ' ' + lastName + ', мені ' + age + ' років.'); //вивело "Привіт! Мене звати Сергій Шимотюк, мені 17 років."
console.log('\n');
console.log('Число в двійковій системі числення: ' + parseInt(age.toString(2))); //вивело "Число в двійковій системі числення: 10001"
console.log('Число в десятковій системі числення: ' + parseInt(age, 10)); //вивело "Число в десятковій системі числення: 17"
console.log('Число в шітнадцятковій системі числення: ' + age.toString(16)); //вивело "Число в шітнадцятковій системі числення: 11"
console.log('\n');
console.log(firstName.toUpperCase() + ' ' + lastName.toUpperCase()); //вивело "СЕРГІЙ ШИМОТЮК"
console.log('\n');
console.log('Довжина призвіща в літерах: ' + lastName.length); //вивело "Довжина призвіща в літерах: 7"
console.log('Довжина імені в літерах: ' + firstName.length); //вивело "Довжина імені в літерах: 6"
console.log('\n');
console.log(firstName.substr(0,3)); //вивело "Сер"
console.log('\n');


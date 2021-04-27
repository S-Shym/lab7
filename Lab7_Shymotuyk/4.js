const firstName = 'Сергій',
lastName = 'Шимотюк', 
nick  = 'S-Shym', 
age = 17, 
weight = 60, 
height = 1.78, 
birthday ='', 
marital = false;
console.log(height % 1); //вивело "0.78"
console.log('\n');
const isHigh = height > 1.8;
console.log(isHigh); //вивело "false"
console.log('\n');
const IMT = weight / (height*height);
console.log(IMT); //вивело "18.93700290367378"
console.log('\n');
const IMTstate = IMT > 24.9 ? console.log('Вага поза нормою') : IMT < 18.5 ? console.log('Вага поза нормою') : console.log('Вага нормальна'); //вивело "Вага нормальна" 
console.log('\n');
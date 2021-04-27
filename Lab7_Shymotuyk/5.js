const firstName = 'Сергій',
lastName = 'Шимотюк', 
nick  = 'S-Shym', 
age = 17, 
weight = 60, 
height = 1.78, 
birthday ='', 
marital = false;
const isHigh = height > 1.8;
const IMT = weight / (height*height);
let IMTstate;
if (IMT < 18.5){
    console.log('Показник менше 18,5'); 
}
else if (IMT >= 18.5 && IMT <= 24.9){
    console.log('Показник дорівнює проміжку 18,5-24,9'); //вивело "Показник дорівнює проміжку 18,5-24,9"
}
else if (IMT >= 25.0 && IMT <= 29.9){
    console.log('Показник дорівнює проміжку 25,0-29,9'); 
}
else if (IMT > 30.0){
    console.log('Показник більше 30'); 
}
console.log('\n');
if (IMT < 18.5){
    IMTstate = 'недостатня вага'; 
}
else if (IMT >= 18.5 && IMT <= 24.9){
    IMTstate = 'нормальна вага'; 
}
else if (IMT >= 25.0 && IMT <= 29.9){
    IMTstate = 'зайва вага';
}
else if (IMT > 30.0){
    IMTstate = 'дуже надмірна вага';
}
console.log(IMTstate); //вивело "нормальна вага"
console.log('\n');
const fix = IMT.toFixed(0);
switch(fix){
    case'0':
    case'1':
    case'2':
    case'3':
    case'4':
    case'5':
    case'6':
    case'7':
    case'8':
    case'9':
        console.log('IMT нульове');
        break;
    case'10':
    case'11':
    case'12':
    case'13':
    case'14':
    case'15':
    case'16':
    case'17':
    case'18':
    case'19':
        console.log('IMT від 10 до 20'); //вивело "IMT від 10 до 20"
        break;
    case'20':
    case'21':
    case'22':
    case'23':
    case'24':
    case'25':
    case'26':
    case'27':
    case'28':
    case'29':
        console.log('IMT від 20 до 30');
        break;
    case'30':
    case'31':
    case'32':
    case'33':
    case'34':
    case'35':
    case'36':
    case'37':
    case'38':
    case'39':
        console.log('IMT від 30 до 40');
        break;
    default:
        console.log('IMT неможливе');
        break;
}
console.log('\n');



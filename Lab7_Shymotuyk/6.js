const firstName = 'Серьожа',
lastName = 'Шимотюк', 
nick  = 'S-Shym', 
age = 17, 
weight = 60, 
height = 1.78, 
birthday ='', 
marital = false;
const isHigh = height > 1.8;
const IMT = weight / (height*height);
let IMTstate, lit, cnt = 0;
let charsArr = [];
firstName.split('').forEach((letter) => charsArr.push(letter.toLowerCase()));
lastName.split('').forEach((letter) => charsArr.push(letter.toLowerCase()));
let repeatedChars = [];
const tempArr = [...charsArr].sort();

for(let i = 0; i < tempArr.length; ++i){
    if(tempArr[i + 1] == tempArr[i]){
        repeatedChars.push(tempArr[i]);
    }
}

for(let i = 0; i < repeatedChars.length; ++i){
    if(repeatedChars[i + 1] == repeatedChars[i]){
        repeatedChars = repeatedChars[i];
    }
}
lit = repeatedChars;

charsArr.forEach((item) => {
    for ( let i = 0; i < lit.length; ++i ) {
     if ( item === lit[i] ) {
      cnt++;
     }
    }
   })
cnt = cnt/lit.length;
console.log('Найчастіше використовувана у імені та прізвищі літера - [' + lit + '], зустрічається ' + cnt + ' разів'); //виводить "Найчастіше використовувана у імені та прізвищі літера - [о], зустрічається 2 разів"
console.log('\n');


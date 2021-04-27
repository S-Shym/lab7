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

function getIMT(weight, height){
    return weight / (height*height);
}

function getIMTstate(IMT){
    if (IMT < 18.5){
        IMTstate = 'недостатня вага'; 
    }
    else if (IMT >= 18.5 && IMT <= 24.9){
        IMTstate = 'нормальна вага'; 
    }
    else if (IMT >= 25.0 && IMT <= 30){
        IMTstate = 'зайва вага';
    }
    else if (IMT > 30.0){
        IMTstate = 'дуже надмірна вага';
    }
    return IMTstate;
}

function getLitfavor(firstName, lastName){
    let arr = [];
    let values, elements = {};
    firstName.split('').forEach((letter) => arr.push(letter.toLowerCase()));
    lastName.split('').forEach((letter) => arr.push(letter.toLowerCase()));

    for(let i = 0; i<arr.length; ++i){
        values = arr[i];
        if(elements[values]) elements[values] += 1;
        else elements[values] = 1;
    }
    return elements;
}
console.log(getIMT(weight, height));
console.log('\n');
console.log(getIMTstate(IMT));
console.log('\n');
console.log(getLitfavor(firstName, lastName));
console.log('\n');

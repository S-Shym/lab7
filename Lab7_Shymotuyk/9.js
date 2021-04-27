const student = {
    firstName: 'Сергій', 
    lastName: 'Шимотюк', 
    nick: 'S-Shym', 
    age: 17, 
    weight: 60, 
    height: 1.78, 
    birthday:' ', 
    marital: false,
    getImt() {
    const IMT = this.weight / (this.height * this.height);
    let IMTstate;
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
       return {IMT, IMTstate};
    },
    getLitfavor() {
     let arr = [];
     let values,
      elements = {};
     this.firstName.split('').forEach((letter) => arr.push(letter.toLowerCase()));
     this.lastName.split('').forEach((letter) => arr.push(letter.toLowerCase()));
     for (let i = 0; i < arr.length; ++i) {
      values = arr[i];
      if (elements[values]) elements[values] += 1;
      else elements[values] = 1;
     }
     return elements;
    },
    traits: ['Дружелюбний', 'Вихований', 'Добродушний'],
    getTraits() {
     return this.traits.join(',');
    },
    addTraits(trait) {
     this.traits.push(trait);
    }
   };
   console.log(student.traits);
   console.log(student.getTraits());
   console.log('\n');
   student.addTraits('Ввічливий');
   console.log(student.getTraits());
   console.log('\n');
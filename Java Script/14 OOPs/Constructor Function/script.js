'use strict'
/*
const Person=function(firstName , birthYear){
    //instance properties
    this.firstName=firstName;
    this.birthYear=birthYear;

    //as we add properties we can also add METHODS
    //BUT this is a bad practice to call methods under constructor function
    //avoid to use methods under constructor function
    // this.calAge=function(){
    //     console.log(2037-this.birthYear);
    // };
};

const jonas = new Person('Akash', 2004);
console.log(jonas);

const vishal=new Person('Vishal' , 2009);
console.log(vishal);

// 1.New {} is created
//2.function is called, this={}
//3.{}.linked to prototype
//4. function automatically return {}
//////////////////////////////////////



//PROTOTYE-each and every function in JS automaticlly has a property called prototype . 
  
Person.prototype.calAge=function(){
    console.log(2037-this.birthYear);
};
jonas.calAge();
vishal.calAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__===Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(vishal));
console.log(Person.prototype.isPrototypeOf(Person));

//.prptotypeOfLinkedObjects

Person.prototype.species='Homp Sapiens';
console.log(jonas.species,vishal.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);
//Onject of the .prototype(Top of prototype chai)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr=[2,3,4,5,6,7,8];
console.log(arr.__proto__);
console.log(arr.__proto__==Array.prototype);

console.log(arr.__proto__.proto__);

Array.prototype.unique=function(){
    return [...new Set(this)];
};

console.log(arr.unique());

*/

//challenge


const now=2037;
const ageJonas=now-1991;
const ageSarah=now-2018;    
console.log(ageJonas,ageSarah);
console.log(ageJonas*2,ageJonas/10,2**3); // 2**3 means 2 to the power of 3 = 2*2*2 

const firstName='Jonas';
const lastName='Schmedtmann';
console.log(firstName+' '+lastName); // concatenation

//Assignmet Operators
let x=10+5;
console.log(x);
x+=10; //x=x+10 
console.log(x);
x*=4; //x=x*4
console.log(x);
x++; // x=x+1
console.log(x);
x--; // x=x-1
console.log(x);

//Comparison Operators
console.log(ageJonas > ageSarah); // >,<,>=,<=
console.log(ageSarah>=18);

const isFullAge=ageSarah>=18;
console.log(now-1991 > now-2018);

console.log(population / 2);

population++;

console.log(population);
console.log(population > 6);
console.log(population < 33);


//  == loose equality operator
//  === strict equality operator
//   avoid the loose equality operator bcz it may create conflicts in our code

const age='18';
if(age===18)console.log("You R adult:D (strict)");

if(age==18)console.log("You R adult:D (loose)");


const favourite=Number(prompt("Enter your favourite no. here"));
console.log(favourite);
console.log(typeof favourite);

if(favourite===23){
    console.log("Great 23 is an amazing number");
} else if( favourite===7){
    console.log("7 is also an amazing number");
} else{
    console.log("The no. is not 7 or 23");
}
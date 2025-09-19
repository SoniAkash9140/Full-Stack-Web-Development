// for(let rep=1; rep<11; rep++){
//     console.log(`lifting weights repitition ${rep}`);
// }


let rep=1;
while(rep<=10){
     console.log(`lifting weights repitition ${rep}`);
     rep++;
}


let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1; // just reassign, no 'let'
}

console.log("Loop ends. You rolled a 6!");

const calcAge3=birthYear=>2025-birthYear;
const age3=calcAge3(2003);
console.log(age3);

const yearUntilRetirement=(birthYear , name)=>{
    const age=2025-birthYear;
    const retirement=65-age;
    //return retirement; //must 
    return `${name} retires in ${retirement} years`; //for multiple parameters 
}

console.log(yearUntilRetirement(2003 , 'Akash'));
console.log(yearUntilRetirement(2005 , 'Vikash'));
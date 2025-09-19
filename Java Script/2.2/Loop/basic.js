const akash=[
    'Akash',
    'Soni',
    2025-2004,
    'student',
    ['Michael','Peter','Steven'],
    true
];

const types=[];

for(let i=0; i<akash.length; i++){
    console.log(akash[i],typeof akash[i]);

    // types[i]=typeof akash[i];
    types.push(typeof akash[i]);
}

console.log(types);

const years=[1996,1998,2000,2002,2004];
const age=[];
for(let i=0; i<years.length; i++){
    age.push(2025-years[i]);
}

console.log(age);
const akash={
    firstName:'Akash',
    lastName:'Soni',
    age:2025-2004,
    job:'Student',
    friends:['Akash','Ansh','Aaron']
};
console.log(akash);

console.log(akash.lastName); //same as bracket
console.log(akash['lastName']); // same as dot

const nameKey='Name';
console.log(akash['first'+nameKey]); //will work 
console.log(akash['last'+nameKey]);

// console.log(akash.'last'+nameKey); //not work

const interestedIn=prompt('What do you want to know about akash ? firstName , lastName , age , job and friends');
// console.log(akash.interestedIn); //o/p UNDEFINED -> because the interestedIn function is not defined in the above section of about akash
if(akash[interestedIn]){
    console.log(akash[interestedIn]);
} else{
    console.log('Wrong request , choose between firstName , lastName , age , job and friends');
}
 
console.log(`${akash.firstName} has ${akash.friends.length} friends, and his best friend is called ${akash.friends[0]}`);

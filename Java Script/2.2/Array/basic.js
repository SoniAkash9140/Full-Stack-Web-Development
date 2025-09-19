//1st method of declaration an array
const friends=['Akash','Ansh','Aaron'];
console.log(friends);
console.log(friends[0]); //value at first index
console.log(friends.length); //it will give the length of the array
console.log(friends[friends.length-1]); //value at the last index 
friends[2]='Iron'; //change the value at index 2
console.log(friends);

const Akash=['Akash','Soni',2025-2004,"Student"]; //different types of data 
console.log(Akash);

//2nd method of declaration of an array
const y= new Array (1991,1996,1998,2000);


//Exercise
const getAge=function(birthYear){
    return 2025-birthYear;
}

const year=[1996,1998,2000,2002,2004];
const age1=[getAge(year[0])];
const age2=[getAge(year[1])];
const age3=[getAge(year[year.length-1])];
console.log(age1,age2,age3);

const ages=[getAge(year[0]),getAge(year[1]),getAge(year[year.length-1])];
console.log(ages);
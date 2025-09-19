const akash ={
    firstName:'Akash',
    lastName:'Soni',
    birthYear:2004,
    job:'Student',
    friends:['Akash','Ansh','Aaron'],
    hasDriveryLicense: true,

    // calcAge: function(){
    //     console.log(this);
    //     return 2025-this.birthYear;
    // }
    calcAge:function(){
        this.age=2025-this.birthYear;
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} year old ${akash.job} , and he has ${this.hasDriveryLicense? 'a' : 'no'} driver's license`
    }
};

console.log(akash.calcAge());
console.log(akash.age);
console.log(akash.age);

//challenge
console.log(akash.getSummary()); 

const mark={
    firstName:'Akash', secondName:'Soni',
    weight:56, height:1.56,
    friends:['Aman' , 'Abhishek', 'Mayank','Ansh'],

    calBMI:function(){
        this.bmi=this.weight/this.height**2;
        return this.bmi;
    }
};

const akash = {
    fullName: 'Akash Singh',
    mass: 92,
    length: 1.95,  // fixed
    calBMI: function() {
        this.bmi = this.mass / this.length ** 2;
        return this.bmi;
    }
};


mark.calBMI();
akash.calBMI();
console.log(mark.bmi ,akash.bmi);
 
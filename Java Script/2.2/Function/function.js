function logger(){
    console.log("Hello! I'm Akash");
}

//calling/running/revoking
logger();
logger();
logger(); 

function fruitProcessor(apple,oranges){
    console.log(apple,oranges);
    const juice=`juice with ${apple} apples and ${oranges}  oranges.`;
    return juice;
}

const appleJuice =fruitProcessor(5,9);
console.log(appleJuice);

const appleOrangeJuice=fruitProcessor(2,4);
console.log(appleOrangeJuice);
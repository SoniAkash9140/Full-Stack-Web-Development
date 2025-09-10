const day='friday';
switch(day){
    case 'monday':
        console.log("Plan Course Structure");
        break;
    case 'tuesday':
        console.log("Go to coding meetup");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("Write Code Examples");
        break;
    default:
        console.log("Enjoy this day");
}


//exact code by nested if-else 
if(day==='monday'){
     console.log("Plan Course Structure");
} else if(day==='tuesday'){
    console.log("Go to coding meetup");
}else if(day==='wednesday' || day==='thursday'){
    console.log("Write Code Examples");
}else{
     console.log("Enjoy this day");
}

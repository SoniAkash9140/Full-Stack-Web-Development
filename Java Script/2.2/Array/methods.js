 //Adding elements
 const friends=["Akash","Ansh"];
 friends.push("Aaron");
 console.log(friends);  //push at the last element

 friends.unshift("Aman");
 console.log(friends); //push at the first element

 //removing elements
 friends.pop();
 console.log(friends); //remove last element

 friends.shift();
 console.log(friends); //remove first element

 // indexOf
 console.log(friends.indexOf("Aman"));
 console.log(friends.indexOf("Akash"));

 //include
 console.log(friends.includes("Akash"));

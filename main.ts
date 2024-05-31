//                                         🚀 Day 10 Challenge: Start Coding! 🚀

//Question 28
// Stages of Life: Determine a person’s life stage with an if-else chain.

let age = 16;

if (age < 2) {
   console.log("baby");
} else if (age < 12){
    console.log("kid");  
} else if (age < 18){
    console.log("teenager");
} else if (age < 65){
    console.log("adult");
} else {
    console.log("senior");
}


//Question 29
//Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.

let favorite_fruits = ["apple", "Mango", "orange"];

if (favorite_fruits.includes("apple")) {
    console.log("I like apple too");
} else {
    console.log("I don't like apple");
}

if (favorite_fruits.includes("Mango")) {
    console.log("I like Mango too");
} else {
    console.log("I don't like Mango");
}   

if (favorite_fruits.includes("orange")) {  
    console.log("I like orange too");
} else {
    console.log("I don't like orange");
}  

if (favorite_fruits.includes("Banana")) {  
    console.log("I like Banana too");
} else {
    console.log("I don't like Banana");
}  


//Question 30
//Question 30: Hello Admin: Greet users differently, especially 'admin'.

let usernames: string[] = ["admin", "user1", "user2","user4","user5"];
usernames.forEach((username) => {
  if (username === "admin") {
    console.log("Hello Admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for loggin in again`);
  }    
})
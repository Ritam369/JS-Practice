//Objects---->>>>

//Singleton--> made using constructor
//Object.create()
//Will be discussed in 2nd part.

//object literals (Another way to declare objects) (Non-singleton object)
const mySym = Symbol("key1") //here we are taking a symbol
const jsUser = {
    userName : "Ritam", //Ebhabe dileo compiler asole etake dekhe ebhabe--> "name" : "Ritam", i.e. key taake o string hisabei neyy
    "fullName" : "Ritam Saha",
    //mySym : "key2", //but here mySym is not acting as symbol..it's becoming string in this key-value pair
    [mySym] : "key2", //to get symbol we have to use brackets //NOTE: symbol is special case (for Interview purpose)
    age : 21,
    location : "Kolkata",
    mail : "ritam@mail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Wednesday","Saturday"]
} 
//if the braces are empty then it would be called empty object
// We give key-value pairs within object

// console.log(jsUser.userName);
// console.log(jsUser["userName"]); //this is another process to print the object values
// console.log(jsUser["fullName"]);
// console.log(jsUser.mySym);
// console.log(typeof jsUser.mySym); //if we print this we will get string not symbol!!

// console.log(jsUser[mySym]); //by this process we have to print symbol

jsUser.mail = "ritam@hotmail.com"
// Object.freeze(jsUser) //Object.freeze() is used so that after this, the object can't be changed
jsUser.mail = "saha@outlook.com"

console.log(jsUser);
//NOTE: By using this we can see the symbol will be printed like this-->
//[Symbol[key1]]: 'key2'

//function within object

jsUser.greet = function() {
    console.log("Hello JS user");
}
jsUser.greet2 = function() {
    console.log(`Hello JS user, ${this.userName}`); //when I need to access the same object
}

// console.log(jsUser.greet); //o/p-> [Function (anonymous)] //function execute hoyni sudhu reference ta esche
console.log(jsUser.greet());
console.log(jsUser.greet2());
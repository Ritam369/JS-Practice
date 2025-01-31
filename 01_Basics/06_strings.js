const greet = "Hello" //String declaration technique
const newName = new String('Ritam_Saha')// Another way to declare a string
const repoCount = 11
console.log(greet + " World " + repoCount);//Backdated technique

//Nowadays we use back-ticks instead of the previous (``)
console.log(`${greet} World. Here's my Repo-count = ${repoCount}`); //Here comes string interpolation means here we use place-holder 
//This is same like formatted string that we use in python

console.log(newName) //O/P--> [String: 'Ritam']
// First print this in browser console then come here
// Here String is not an array, it's actually an object and 0: "R", 1: "i"...these are not index, these are actually key-value pairs!!

console.log(newName[1]) //it will print value of key 1
console.log(newName.__proto__) //it will check whether the variable is object or not
console.log(newName.length);
console.log(newName.toUpperCase());
console.log(newName.charAt(3)); //character at index
console.log(newName.indexOf('t')); //index of value
console.log(newName.substring(0,3)); //Ending index er aage obdhi print hbe
// console.log(newName.slice(-9,2));

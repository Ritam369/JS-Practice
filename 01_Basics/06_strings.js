const greet = "Hello" //String declaration technique
const newName = new String('Ritam_Saha')// Another way to declare a string
const repoCount = 11
console.log(greet + " World " + repoCount);//Backdated technique

//Nowadays we use back-ticks instead of the previous (``)
console.log(`${greet} World. Here's my Repo-count = ${repoCount}`); //Here comes string interpolation means here we use place-holder in which the variables can directly inject their values.
//This is same like formatted string that we use in python

console.log(newName) //O/P--> String: {'Ritam'}
// First print this in browser console then come here
// Here String is not an array, it's actually an object and 0: "R", 1: "i"...these are not index, these are actually key-value pairs!!

console.log(newName[1]) //it will print value of key 1
console.log(newName.__proto__) //it will check whether the variable is object or not
console.log(newName.length);
console.log(newName.toUpperCase());
console.log(newName.charAt(3)); //character at index
console.log(newName.indexOf('t')); //index of value
console.log(newName.substring(0,3)); //Ending index er aage obdhi print hbe
// If we use negative undex at strt then it completely ignore that index and will start from 0 index
// console.log(newName.slice(-8,2)); //Works same as substring but here we can use negative index

const newString = "   Ritam" 
console.log(newString);
console.log(newString.trim()); //Kono word er aage o pore thaka extra space ke delte kore deyy...but 2to word er majhkhaner space ke as it is rakhe 

console.log(newName.replace('a','y')); //Single character replace kore

console.log(newName.includes('it')); //Give keyword or characters gulo ache kina check kore

console.log(newName.split('_')); //The string will be splitted based on the given separator in the parameter and it will be converted into an array



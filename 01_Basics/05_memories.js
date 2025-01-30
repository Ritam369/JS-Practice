//Stack memory and Heap memory
//For primitive data-type => stack memory is uesd (Call by Value)
//for non-primitive data-type => heap memory is used (Call by Reference)

//Concept of Stack memory

let nameOne = "Ritam"
let nameTwo = nameOne
nameTwo = "Sneharika"
console.log(nameOne);
console.log(nameTwo);

//Concept of Heap memory

let userOne ={
    name: "Ritam Saha",
    email: "ritam@gmail.com"
}
let userTwo = userOne
userTwo.email = "sneharika@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
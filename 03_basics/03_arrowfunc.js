//this is a keyword which refers to current context/reference.

const userDetails = {
    userName : "Ritam",
    welcomeMessage : function(){
        console.log(`Welcome ${this.userName}`);
        console.log(this)
    } 
}

userDetails.welcomeMessage();
userDetails.userName = "Fred"
userDetails.welcomeMessage();

console.log(this); //Can't get any global context thus in this **node enviroment** it's taking an empty object {}
//But in browser enviroment it's taking window object.(global object)



// function coffee(){
//     console.log(this); //the output is important***
// }

// function coffee() {
//     let name = "Helloo"
//     console.log(this.name); //undefined
// }
// coffee()

 // OR

// const coffee = function() {
//     let name = "Helloo"
//     console.log(this.name); //undefined
// }
// coffee()


//So by this we can see this can't take function as it's current context



// Arrow function (Another way to declare function)

const coffee = () => {
    let name = "Helloo"
    // console.log(this.name); //undefined
    console.log(this); //{}
}
coffee()

// const addTwo = (num1,num2) => { //num1,num2 are parameters
//     return num1+num2
// }

const addTwo = (num1,num2) => num1+num2; //NOTE: here implicit return is happening means return keyword is not required.
// const addTwo = (num1,num2) => (num1+num2); //if the definition is wrapped within braces then return keyword is required
//and if the definition is wrapped within parenthese then return keyword is not required.

console.log(addTwo(2,5))


//to return object using arrow function we need to wrap the object within parentheses
const addThree = (n1,n2,n3) => ({greet : "Hii Ritam"})

console.log(addThree(5, 3, 6))
function sayMyName() {
    console.log("R");
    console.log("I");
    console.log("T");
    console.log("A");
    console.log("M");
} //one way to declare function

// sayMyName //Reference
// sayMyName() //Execution

// console.log(sayMyName); //[Function: sayMyName]
// console.log(sayMyName()); //function execution er por ekta 'undefined' asche


//Another way to declare function
const addTwoNumbers = function(num1,num2) { //function definition e pass hoyy parameters
    // console.log(num1+num2);
}

// addTwoNumbers(2,3) //function calling e pass hoyy arguments
// addTwoNumbers(2,'3')
// addTwoNumbers(2,'a')
// addTwoNumbers(2,null)

const result = addTwoNumbers(4, 6)
// console.log("Result :",result); //udefined asbe because function toh kichu return korche nah

const addThreeNumbers = function(num1,num2,num3) {
    // let res = num1+num2+num3
    return num1+num2+num3 //return er por jaii lagabo seta execute hbe nah karon seta unreachable hbe karon taar aaagei return keyword use hoye geche
}
// const res = addThreeNumbers(3, 4, 6)
// console.log("Result :",addThreeNumbers(3, 4, 6));


function userloginMessage(name = "User"){ //jodi kichu pass nah kora hoyy tahole by default ei value ta jabe and jodi kichu pass hoyy argument diye then seta ekhaner value taake overwrite kore debe
    if(/*name === undefined*/!name){
        return ("Please enter valid name!!");
    }
    return `${name} just logged in!!`
}
// console.log(userloginMessage("Ritam"));
// console.log(userloginMessage("")); //JS e if er condition e jodi ("") erom pass korano hoyy tahole seta false bojhay
// console.log(userloginMessage());


//Use od rest operator (denoted by ...) (same denotion as spread operator but on application basis they are different operation)
// By rest operator I can paas any number of arguments it won't hamper the definition of the function
//rest operator returns an array

function totalCartPrice(...num){
    return num
}

// function totalCartPrice(val1,val2, ...num){
//     return num
// }

console.log(totalCartPrice(1000))
console.log(totalCartPrice(100, 230, 33000, 4500))

//How to pass objects as the paraameters of a function??

const userDetails = {
    name : "Ritam",
    age : 21
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and Age is ${anyObject.age}`);
}

handleObject(userDetails)
handleObject({
    name : "George",
    age : 14
})

//Passing array as paarameter of function
const myArray = [10, 20, 30]
function returnThirdValue(getArray){
    return getArray[2]
}
console.log(returnThirdValue(myArray));
console.log(returnThirdValue([250, 360, 470]));
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
    console.log(num1+num2);
}

// addTwoNumbers(2,3) //function calling e pass hoyy arguments
// addTwoNumbers(2,'3')
// addTwoNumbers(2,'a')
// addTwoNumbers(2,null)

const result = addTwoNumbers(4, 6)
console.log("Result :",result); //udefined asbe because function toh kichu return korche nah

const addThreeNumbers = function(num1,num2,num3) {
    // let res = num1+num2+num3
    return num1+num2+num3 //return er por jaii lagabo seta execute hbe nah karon seta unreachable hbe karon taar aaagei return keyword use hoye geche
}
// const res = addThreeNumbers(3, 4, 6)
console.log("Result :",addThreeNumbers(3, 4, 6));


function userloginMessage(name = "User"){ //jodi kichu pass nah kora hoyy tahole by default ei value ta jabe and jodi kichu pass hoyy argument diye then seta ekhaner value taake overwrite kore debe
    if(/*name === undefined*/!name){
        return ("Please enter valid name!!");
    }
    return `${name} just logged in!!`
}
console.log(userloginMessage("Ritam"));
console.log(userloginMessage("")); //JS e if er condition e jodi ("") erom pass korano hoyy tahole seta false bojhay
console.log(userloginMessage());
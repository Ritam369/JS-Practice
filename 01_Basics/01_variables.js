const accountID = 122453
var accountPassword = "12345"
let accountMail = "ritam@gmail.com"
accountCity = "Kolkata"//not preferable
let accountState //As here is no value assigned.. thus it will print "undefined"

// accountID = 234115 //Not allowed 
/*
    Prefer not to use var
    because of issue in block scope and functional scope
    always prefer to use let and const

    Variables declared with var are function-scoped, meaning they're accessible throughout the entire function, even before they're declared due to hoisting. This can lead to unexpected behavior and bugs, especially in larger programs. In contrast, let and const are block-scoped, providing better control over variable visibility.
*/

accountPassword = "23165"
accountMail = "ritche@outlook.com"
accountCity = "Chennai"

console.log(accountID);
console.table([accountID, accountMail, accountPassword, accountCity, accountState])
const accountID = 122453
var accountPassword = "12345"
let accountMail = "ritam@gmail.com"
accountCity = "Kolkata"//not preferable
let accountState //As here is no value assigned.. thus it will print "undefined"

// accountID = 234115 //Not allowed 
/*
    Prefer not to use var
    because of block scope and functional scope
    always prefer to use let and const
*/

accountPassword = "23165"
accountMail = "ritche@outlook.com"
accountCity = "Chennai"

console.log(accountID);
console.table([accountID, accountMail, accountPassword, accountCity, accountState])
// let a = 150
// const b = 250
var c = 300
if(true){
    let a = 10
    const b = 20
    var c = 30 //c getting updated, not following the scope boundary
    console.log(a);
    console.log(b);
    console.log(c);    
}
// console.log(a); //This will show an error as "ReferenceError: a is not defined"
// console.log(b); //This will show an error as "ReferenceError: b is not defined"
console.log(c);

//Now the question arise, as var is working so why let and const needed?? (var is oldest)
//because var doesn't work according to block-scope
//let and const are block-scope means if the variables are declared within an scope then
//it will only work within that scope only, outside the scope it will give ReferenceError
//But!! var does not follow this rull, it doesn't follow the block-scope rule
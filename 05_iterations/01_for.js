// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
// }

// for (let i = 0; i < 10; i++) {
//     if (i == 5) {
//         console.log("Here 5 comes...");
//     }
//     console.log(i)
// }
console.log("Multiplication tables from 1 to 10-->")
for(let i=1; i<=10; i++){
    console.log(`Multiplication table of ${i} -`)
    for(let j=1; j<=10; j++){
        console.log(`${i} * ${j} = ${i*j}`)
    }
}
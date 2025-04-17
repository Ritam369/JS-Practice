//How does Javascript executes code?? (JS Execution context)


//Code --> Global Execution Context(stored within 'this')(for browser, this generally stored windows-object) (Executes within a thread means JS is single threaded)
//                  |
//                  |
//                \ | /
//         Functional Execution Context
//                  |
//                  |
//                \ | /
//         Eval Execution Context (Above twos are main, but some doccumentation also says that eval EC plays a significant role)


//When JS runs a code, it basically runs it in 2 phases. These are-->
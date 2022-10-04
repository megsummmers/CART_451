// //add a reference to the module... 
// const testModuleVar = require('./testModule');
// //call the function name ... 
// console.log('Results: ' + testModuleVar.name());
// testModuleVar.setPetName("Santiago");
// console.log(testModuleVar.getPetName());

// //use the static ...
// const testModuleStat = require('./staticModule');
// console.log(testModuleStat);
 
// testModuleStat.passMessage("testMessage");
// testModuleStat.passMessage("testMessage_2");
// testModuleStat.passMessage("testMessage_3");
 
// // next var
// const testModuleStatTwo = require('./staticModule');
// console.log(testModuleStatTwo);
// testModuleStatTwo.passMessage("testMessage");
// testModuleStatTwo.passMessage("testMessage_2");
// testModuleStatTwo.passMessage("testMessage_3");

const testModuleReveal = require('./classModule');
console.log("the closure:: ");
console.log(testModuleReveal); //the returned function (CLOSURE)
 
 
const testModuleReveal_A = testModuleReveal();
console.log("the invoked function:: ");
console.log(testModuleReveal_A);//the returned values FROM the function
testModuleReveal_A.addMessage("testMessage_A");
testModuleReveal_A.addMessage("testMessage_A_2");
testModuleReveal_A.addMessage("testMessage_A_3");
testModuleReveal_A.accessMessages();
 
 
const testModuleReveal_B = testModuleReveal();
console.log("the invoked function:: ");
console.log(testModuleReveal_B);//the returned values FROM the function
testModuleReveal_B.addMessage("testMessage_B");
testModuleReveal_B.addMessage("testMessage_B_2");
testModuleReveal_B.addMessage("testMessage_B_3");
testModuleReveal_B.accessMessages();
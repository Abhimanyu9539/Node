/* 
A closure is a function that remembers the environment (or scope) in which it was created, 
even after the outer function has finished executing. 
This means that a closure can access variables from its outer function scope even after the outer function has returned. 
*/

function outerFunction() {
    let outerVariable = "I am from outer scope";

    function innerFunction() {
        console.log("Inside inner function");
        console.log(outerVariable);  // Inner function has access to outerVariable
    }

    return innerFunction;
}

const closureFunc = outerFunction();
closureFunc();  // Output: "I am from outer scope"

// 1. Function call execution completes => JS destroys variables
// 2. Closure: Outer function, inner function 
// 3. JS: JS will not destroy the outer function variables (memory)
/// inner function might need it => Inner function forms a closure

function outer(outerVariable) {
  console.log("Outer function with variable ",outerVariable )

  return function inner(innerVariable) {
    console.log("inner function with variable ", innerVariable, outerVariable)
  }
}

const innerFunction = outer("ABC");
innerFunction("DEF");
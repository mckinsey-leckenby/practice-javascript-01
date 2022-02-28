// Write a function that takes two numbers and returns 
// the sum of those numbers 
function add(num1, num2){
    return num1 + num2
}
console.log("add", add(2, 3)) //Expects 5


// Write a function that takes any number of arguments
//of type number and returns the sum of all the arguments

function sum(...args){
    let total = 0
    for(let i=0; i < args.length; i++ ) {
        total = total + args[i]
    }
  return total 
}

console.log("sum", sum(2, 4, 6, 3)) // Expects 15


// Write a function that takes two strings, A and B, 
// and returns whether B is in A in a case-insensitve way 


function stringIncludes(string1, string2){
    let newString = string1.toLowerCase()
    if (newString.includes(string2.toLowerCase())){
        return true
    } else {
        return false
    }
}

console.log(
    "stringIncludes", 
    stringIncludes("I drove to Chicago in a van with my friend", "new")
    )


function add(num1, num2){
    return num2 + num1
}

console.log(add(9,7))

function sum(a, b, ...args){
    let total = 0
    for(let i=0; i < args.length; i++){
        total = total + args[i]
    }
 return total   
}

console.log("sum", sum(2, 3, 4, 5))

function stringIncludes(string1, string2){
    let string = string1.toLowerCase()
    return string.includes(string2.toLowerCase())
     
}

console.log("stringIncludes", stringIncludes("I drove to New York in a van with my friend", "new"))
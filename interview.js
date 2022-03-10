function sum(num1, num2){
    return num1 + num2
}

console.log(sum(1,9))
console.log(sum(12,4))

function totalOfArg(...args){
    let total = 0
    for(let i = 0; i < args.length; i++){
        total = args[i] + args[i] 
    }
    return total

}

console.log(1,2,4)
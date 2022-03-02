let count = 0

function recursion (){
    if (count === 5){
        return "I'm done"
    }
    count ++
    console.log(`I'm looping, loop # ${count}`)
    return recursion()
}

console.log(recursion())
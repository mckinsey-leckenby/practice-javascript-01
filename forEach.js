const fruits = ['apple', 'banana', 'pear', 'cherry']

//forEach 
let capFruits = []
fruits.forEach(fruit => {
    let capFruit = fruit.toUpperCase();
    capFruits.push(capFruit)
})




const prices = [6.75, 3.10, 4.00, 8.12];

// Total: 21.97]
let total = 0 
prices.forEach(price => {
    total = price + total
})
console.log(total)


const numbers = [1,2,3,4,5,6,7,8,9,10]

const evenNumbers = number => number % 2 === 0
const newArray = numbers.filter(evenNumbers)

console.log(newArray)
const numbers = [1,2,3,4,5,6,7,8,9,10];
let times10 = [];

// times10 should be: [10,20,30,40,50,60,70,80,90,100]
// Write your code below

numbers.forEach(number => {
    let numberTimes10 = number * 10
    times10.push(numberTimes10)
})

console.log(times10)


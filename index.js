const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20 

century20 = years.filter(year => year <= 2000)
// console.log(century20)


const strings = ['1','2','3','4','5']
const numbers = strings.map(string => parseInt(string, 10))
// console.log(strings)
// console.log(numbers)

const fruits = ['apple', 'pear', 'cherry'];

let capitalizedFruits = fruits.map(fruit => fruit.toUpperCase())

// console.log(fruits)
// console.log(capitalizedFruits);

const prices = [5, 4.23, 6.4, 8.09, 3.20];

let priceString = prices.map(price => `$${price.toFixed(2)}`)

console.log(priceString)
    // Result: [ '$5.00', '$4.23', '$6.40', '$8.09', '$3.20' ]
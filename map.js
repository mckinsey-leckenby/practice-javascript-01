

const strings = ['1','2','3','4','5']
const numbers = strings.map(string => parseInt(string, 10))
// console.log(strings)
// console.log(numbers)

const fruits = ['apple', 'pear', 'cherry'];

let capitalizedFruits = fruits.map(fruit => fruit.toUpperCase())

// console.log(fruits)
// console.log(capitalizedFruits);

const prices = [5, 4.23, 6.4, 8.09, 3.20];
const priceString = price => `$${price.toFixed(2)}`
const displayPrices = prices.map(priceString)


// console.log(displayPrices)
    // Result: [ '$5.00', '$4.23', '$6.40', '$8.09', '$3.20' ]

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let abbreviatedDays;

// abbreviatedDays should be: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// Write your code below

abbreviatedDays = daysOfWeek.map(dayOfWeek => dayOfWeek.slice(0,3))

console.log(abbreviatedDays)
// let total = [0,1,2,3].reduce(
//     (acc, cur) => acc + cur
// )
// console.log(total)



const prices = [6.75, 3.10, 4.00, 8.12]; // Total: 21.97

let total = prices.reduce((sum, price) => sum + price, 0)

console.log(total);

const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];

// Result: 4

let gNameCount = names.reduce((count, name) => {
    if (name[0] === "G") {
        return count + 1;
    } else {
        return count;
    }
}, 0)

console.log(gNameCount)

const phoneNumbers = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678", "(212) 123-4567", "(416) 123-4567"];
let numberOf503;

// numberOf503 should be: 3
// Write your code below

numberOf503 = phoneNumbers.reduce((count, phoneNumber) => {
    console.log(phoneNumber.slice(1,4))
    if(phoneNumber.slice(1,4) === "503") {
        return count + 1;
    } else{
        return count
    }
  }, 0)

//   console.log(numberOf503)
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const sumWithInitial = array1
    .reduce((previousValue, currentValue) => {
        (previousValue + currentValue)
    });
console.log(sumWithInitial);
// expected output: 10


const products = [
    { name: 'hard drive', price: 59.99 },
    { name: 'lighbulbs', price: 2.59 },
    { name: 'paper towels', price: 6.99 },
    { name: 'flatscreen monitor', price: 159.99 },
    { name: 'cable ties', price: 19.99 },
    { name: 'ballpoint pens', price: 4.49 }
];

let highestProductUnderTen = products
.filter(product => product.price > 10)
//console.log(highestProductUnderTen)

let addedPrices = highestProductUnderTen.reduce((sum, product) => sum + product.price, 0)
.toFixed(2)

console.log(addedPrices)




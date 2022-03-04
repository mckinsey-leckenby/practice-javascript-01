
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


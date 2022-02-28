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


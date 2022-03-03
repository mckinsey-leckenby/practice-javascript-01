const arr = [1,2,3]

const smallerArr = arr.filter(number => number !==2).map(number => number + 10)
// const incrementedArr = smallerArr.map(number => number + 1)
// console.log(smallerArr)
// console.log(incrementedArr)

const numbers = [1, 1, 2, 3, 4, 3, 5, 5, 6, 7, 3, 8, 9, 10];

const unique = numbers.filter(function(number, index, array) {
  return index === array.indexOf(number);
});

// console.log(unique); // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


let okArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const mappedArray = okArray.map(number => number + 1)
const filterArray = okArray.filter(number => number - 5)

// console.log(mappedArray)
// console.log(filterArray)


const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let displayYears;

// displayYears should be: ["2015 A.D.", "2013 A.D.", "2012 A.D."]
// Write your code below
// console.log(years)
displayYears = years.filter(year => year > 2001).map(year => year + " A.D.")

// console.log(displayYears)

const users = [
    {name: "Samir", age: 27},
    {name: "Angela", age: 24},
    {name: "Beatrice", age: 23}
]
let displayNewUserList = users.filter(user => user.name !== "Samir")
let addedAgeArray = users.map(user => user.name + " is "+  user.age + " years old")

let usersObject = users.reduce((usersObject, user) => {
    usersObject[user.name] = user.age
    return usersObject
}, {} )
// console.log(addedAgeArray)
// console.log(displayNewUserList)
// console.log(usersObject)

// let myArray = [0,1,2,3,4]
// myArray.forEach(num => console.log(num % 2))

const authors = [
    { firstName: "Beatrix", lastName: "Potter" },
    { firstName: "Ann", lastName: "Martin" },
    { firstName: "Beverly", lastName: "Cleary" },
    { firstName: "Roald", lastName: "Dahl" },
    { firstName: "Lewis", lastName: "Carroll" }
  ];
  let fullAuthorNames = authors.map(author => author.firstName + " " + author.lastName)
   

  console.log(fullAuthorNames)
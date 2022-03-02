const arr = [1,2,3]

const smallerArr = arr.filter(number => number !==2).map(number => number + 10)
// const incrementedArr = smallerArr.map(number => number + 1)
console.log(smallerArr)
// console.log(incrementedArr)

const numbers = [1, 1, 2, 3, 4, 3, 5, 5, 6, 7, 3, 8, 9, 10];

const unique = numbers.filter(function(number, index, array) {
  return index === array.indexOf(number);
});

console.log(unique); // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
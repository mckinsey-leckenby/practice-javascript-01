// const movies = [
//     ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters'],
//     ['Finding Dory'],
//     ['Jaws', 'On the Waterfront']
//   ]


//   const flatMovies = movies.reduce((arr, innerMovies) => [...arr, ...innerMovies], [])

//   console.log(flatMovies)

//   const users = [
//     {
//       name: 'Samir',
//       age: 27,
//       favoriteBooks:[
//         {title: 'The Iliad'},
//         {title: 'The Brothers Karamazov'}
//       ]
//     },
//     {
//       name: 'Angela',
//       age: 33,
//       favoriteBooks:[
//         {title: 'Tenth of December'},
//         {title: 'Cloud Atlas'},
//         {title: 'One Hundred Years of Solitude'}
//       ]
//     },
//     {
//       name: 'Beatrice',
//       age: 42,
//       favoriteBooks:[
//         {title: 'Candide'}
//       ]
//     }
//   ];

//   console.log(users)

// Result: ['The Iliad', 'The Brothers Karamazov', 'Tenth of December', 'Cloud Atlas', 'One Hundred Years of Solitude', 'Candide'];


const array = [6, 9, 11, 7, 5, 12]

function maximizeProfit(array) {
    let maxProfit = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] > array[i]) {
                let profit = array[j] - array[i]
                console.log(profit)
                if (profit > maxProfit) {
                    maxProfit = profit
                    // console.log(maxProfit)
                }
            }
        }
    }
    return maxProfit
}
console.log(maximizeProfit(array))
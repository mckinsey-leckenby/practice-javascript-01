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
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

 function returnFirstTwoDrivers () {
    return drivers.slice(0, 2);
  };

  console.log(returnFirstTwoDrivers(drivers))
/*

// A sorting algorithm for objects

let numbers = [ 5, 1, 9, -2, 0, 20, -200 ]

numbers.sort((a, b) => {

  if (a > b) return 1 // 1 stands for wanting a change to happen!
  if (a < b) return -1 // -1 stands for "things are ok they way they are"
  if (a == b) return 0 // 0 stands for "they're the same, so no need to change"
  
})

console.log(numbers)
*/

/*
let users = [
  {name: "Jack", age: 40},
  {name: "britney", age: 30},
  {name: "Emma", age: 20},
  {name: "Mary", age: 45},
  {name: "richard", age: 1},
  {name: "Manuel", age: 4},
  {name: "Otto", age: 400},
  {name: "jack", age: 70},
]

// First challenge : sort the array users by their age : we resume at 19:53 - 19:54

users.sort((a, b) => {

  let firstName = a.name.toLowerCase()
  let secondName = b.name.toLowerCase()

  if (firstName > secondName) return 1
  if (firstName == secondName) return 0
  if (firstName < secondName) return -1
  
})

console.log(users)

*/


/*

// Some ideas to create new arrays with new objects without keeping their reference

let users = [
  {name: "Jack", age: 40},
  {name: "britney", age: 30},
  {name: "Emma", age: 20},
  {name: "Mary", age: 45},
  {name: "richard", age: 1},
  {name: "Manuel", age: 4},
  {name: "Otto", age: 400},
  {name: "jack", age: 70},
]

let olderUsers = []

users.forEach(user => {

  let olderUser = Object.assign({}, user)
  olderUser.age += 50000
  olderUsers.push(olderUser)
  
})

console.log(users)
console.log(olderUsers)

*/
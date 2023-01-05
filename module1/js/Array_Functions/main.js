
// A game related bit on .reduce() function

/*

let monsters = [
    {hp: 40, name: "Goblerino", attack: 3, money: 50},
    {hp: 20, name: "Goblerino", attack: 4},
    {hp: 30, name: "Boss Goblin", attack: 1},
    {hp: 10, name: "Goblerino", attack: 3, money: 30},
    {hp: 0, name: "Of Fire", attack: 5},
    {hp: 400, name: "Goblet", attack: 3},
    {hp: 30, name: "Goblerino", attack: 8, money: 20},
]

// Get all the money from the goblins - here reduce has a final argument of 0 to set its initial value.
let selectedMonsters = monsters.reduce((sum, monster) => {

    if (monster.hasOwnProperty('money')) 
    {
        return sum + monster.money
    }
    else return sum

}, 0)

console.log(monsters)
console.log(selectedMonsters)

*/

// Using filter to filter through bank accounts

/*

let bankAccounts = [ 70001, 20, 502, -31, 0, -500, 203, 12000]

// return all the odd numbers
let newBankAccounts = bankAccounts.filter(element => element % 2 != 0)

console.log(bankAccounts)
console.log(newBankAccounts)

*/

// Using reduce to get all values into one string

/*


let words = [ "RingLight", "bottle", "juice", "pen", "Computer", "Pencil"]

let list = words.reduce((text, word) => text + "\n" + word)

console.log(words)
console.log(list)

*/


// Using .reduce() function for numbers

/*

let numbers = [ 5, 7, 3, 0, -2, 14 ]

let sumNumbers = numbers.reduce(function(multiplication, number){

    // if the number is zero, then don't multiply!!!
   if ( number != 0 ) return multiplication * number 
   return multiplication
})

//console.log(numbers)
console.log(sumNumbers)


*/

// Using map to add values into the values of the array.

/*

let words = [ "RingLight", "bottle", "juice", "pen", "Computer", "Pencil"]

let newWords = words.map(element => {

    // if it's a juice or a bottle, put Drink: nameOfDrink
    if ( element == 'juice' || element == 'bottle' ) return `Drink: ${element}.`

    // Other than that, put Item: RingLight.
    return `Item: ${element}.`
  
})

console.log(words)
console.log(newWords)

*/


// A brief mention to how .forEach() can produce the same results as .map()

/*

let words = [ "RingLight", "bottle", "juice", "pen", "Computer", "Pencil"]

// let newWords = words.map(element => `Item: ${element}.`)
let newWords = []

words.forEach(element => newWords.push(`Item: ${element}.`))

console.log(words)
console.log(newWords)

*/

// Using map to increase bank accounts value based on a value.

/*
let bankAccounts = [ 70000, 20, 500, -30, 0, -500, 200, 12000]

let newBankAccounts = bankAccounts.map(function(element){
  
  // add 125 euros if the bank account has less than 1000 euros.
  if (element < 1000) 
  {
    return element + 125
  }
  else
  {
    return element
  }

})

console.log(bankAccounts)
console.log(newBankAccounts)
*/


// Some real case uses of the array functions
/*

// Using map to tax incomes.
let incomes = [2000, 1000, 1200, 800, 900, 1600, 1800]

// tax all the values in 20%
let newIncomes = incomes.map(element => element * 0.8)

// get all the value taxed (in total)
let totalTax = incomes.reduce((totalAmount, amount) => totalAmount + amount ) * 0.2

// get the average of all the values (using .reduce())
let averageSalaries = incomes.reduce((totalAmount, amount) => totalAmount + amount) / incomes.length

console.log(`Incomes with Tax: ${newIncomes}`)
console.log(`Total Tax: ${totalTax}`)
console.log(`Average: ${averageSalaries}`)

*/
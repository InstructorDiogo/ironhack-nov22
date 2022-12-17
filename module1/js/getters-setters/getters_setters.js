class User {
  constructor(firstName, lastName)
  {
    this.firstName = firstName
    this.lastName = lastName
  }

  get fullName(){
    return `${this.firstName} ${this.lastName}`
  }

  set fullName(fullName){
    let names = fullName.split(" ")
    this.firstName = names[0]
    this.lastName = names[names.length - 1]

    console.log("assigned a full name")
  }

}

let user1 = new User("Yona", "Park")

console.log(user1.fullName)
user1.fullName = "Diogo Pedro Barros Martins Barros"

console.log(user1.fullName)
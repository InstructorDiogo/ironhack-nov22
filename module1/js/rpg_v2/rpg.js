class Player {

  constructor(hp, attackValue, defenseValue, name) {    
    this.hp = hp
    this.maxHP = hp
    this.defenseValue = defenseValue
    this.maxDefense = defenseValue
    this.attackValue = attackValue
    this.name = name
    console.log("The player was spawned.")
  }

  attack(target){
    target.hp -= this.attackValue
    console.log(`${target.name} lost ${this.attackValue} hp and stil has ${target.hp} remaining.`) 
  }

  defend(){
    this.defenseValue += 3
  }
}

class Monster {
  constructor(hp, attackValue, name)
  {
    this.hp = hp
    this.attackValue = attackValue
    this.name = name
  }

  attack(target){

    let attackMinusDefense = 
      this.attackValue - target.defenseValue

    if (attackMinusDefense < 0)
      attackMinusDefense = 0
    
    target.hp -= attackMinusDefense
    console.log(`${target.name} lost ${attackMinusDefense} hp and stil has ${target.hp} remaining.`)
  }
}

class Slime extends Monster {
  constructor(hp, attackValue, name)
  {
    super(hp, attackValue, name)
    this.hasExploded = false
  }

  explode(target){
    if (!this.hasExploded)
    {
      target.hp -= 10
      this.hp -= 10
      console.log(`The slime exploded and ${target.name} lost 10hp.`)
      this.hasExploded = true
    }
    else
    {
      console.log(`The slime already exploded and can't explode now.`)
    }
  }
}

selectOption = function(player, currentMonster){

  // Menu Display
console.log(`
Player's hp: ${player.hp}
Monster > ${currentMonster.name} | ${currentMonster.hp}hp.

a) attack
d) defend
q) quit

`)  

  let option = prompt("Choose what to do")
  return option
}

let mainPlayer = new Player(30, 5, 1, "Dani")
let monster1 = new Slime(40, 3, 'Purple Slimerino')
let monster2 = new Slime(40, 3, 'Goblin')


let option = ""
let currentMonster = monster1

while (option != "q")
{
  option = selectOption(mainPlayer, currentMonster)

  switch(option)
  {
    case 'a':
      mainPlayer.attack(monster1)
      break
    case 'd':
      mainPlayer.defend()
      break
    case 'q':
      console.log("leaving...")
      break
  }

  currentMonster.attack(mainPlayer)

  if (mainPlayer.hp <= 0)
  {
    console.log("Game Over.")
    break
  }

  if (monster1.hp <= 0)
  {
    console.log("You win.")
    mainPlayer.hp = 30
    currentMonster = monster2
  }

  mainPlayer.defenseValue = mainPlayer.maxDefense
    
}

class Player {

  constructor(hp, attackValue, name) {    
    this.hp = hp
    this.attackValue = attackValue
    this.name = name
    console.log("The player was spawned.")
  }

  attack(target){
    target.hp -= this.attackValue
    console.log(`${target.name} lost ${this.attackValue} hp and stil has ${target.hp} remaining.`) 
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
    target.hp -= this.attackValue
    console.log(`${target.name} lost ${this.attackValue} hp and stil has ${target.hp} remaining.`)
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

let mainPlayer = new Player(20, 3, "Dani")
let monster1 = new Slime(40, 3, 'Purple Slimerino')
let monster2 = new Monster(30, 1, "Goblin")

mainPlayer.attack(monster1)
monster1.attack(mainPlayer)

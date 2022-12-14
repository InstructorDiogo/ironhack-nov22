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

class Boss extends Monster{
  constructor(hp, attackValue, name)
  {
    super(hp, attackValue, name)
    this.isStrong = false
  }
}

let mainPlayer = new Player(20, 3, "Dani")
let monster1 = new Slime(40, 3, 'Purple Slimerino')
let monster2 = new Slime(40, 3, 'Goblin')
let monster3 = new Boss(130, 10, "Finalus Mortalus")

mainPlayer.attack(monster1)
monster1.attack(mainPlayer)
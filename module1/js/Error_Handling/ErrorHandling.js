
let ageIdentifier = () => {

  let isInMenu = true
  
  while (isIsMenu){

    try {
      
      let age = prompt("Insert your age")
  
      if (age < 0 || typeof age != 'number')
      {
        throw new Error("the age is invalid!")
      }
      
      if (age > 30)
      {
        console.log("You're an adult and you're good to go!.")
        isInMenu = false
      }
    
    }
    catch(e)
    {
        console.log( `Error - ${e.message}! >:(`)
        continue
    }
    finally {
        if (!isInMenu)
        {
          console.log("Things were Ok.")
        }
    }
    
  }
  
}
  
ageIdentifier()
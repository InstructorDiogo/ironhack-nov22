
eatOranges = function(totalOranges, maxEaten){

    // Create an object for returning
    let orangesObj = {
      error: ``,
      information: ``,
      orangesEaten: 0
    }
  
    // Create error handling
    if (totalOranges <= 0)
    {
      orangesObj.error = "no oranges provided"
      return orangesObj
    }
  
    // Eat the oranges
    for (let i = 0; i < totalOranges; i++)
    {
      console.log("Ate one 🍊")
      orangesObj.orangesEaten++
  
      if (orangesObj.orangesEaten >= maxEaten)
      {
        orangesObj.information = `The user got full!`
        break
      }
    }
  
    if( totalOranges == orangesObj.orangesEaten)
    { 
      orangesObj.information = `The user ate everything!`
    }
    
    return orangesObj
  }
  
  let totalOranges = 50
  let maxEaten = 200
  let orangesObj = eatOranges(totalOranges, maxEaten)
  
  if (orangesObj.error)
  {
    console.log(`There was an error. - ${orangesObj.error}`)
  }
  else
  {
    console.log(`Oranges eaten: ${orangesObj.orangesEaten}`)
    console.log(orangesObj.information)
  }
  
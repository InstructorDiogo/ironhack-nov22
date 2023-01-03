
function getData(connector, displayErrors){

  connector()
  displayErrors()
  
}

// Get Items from Database
function ConnectToSQL(){
  console.log("Connected to SQL")
}

// Get Status from Server
function ConnectToNodeAPI(){
  console.log("Connected to Node")
}

// Get Data from Excel files
function ConnectToPythonAPI(){
  console.log("Connected to Python")
}

// Here, the connection is messed up
function WebError(){
  console.error("the connection is off")
}

// Here, the data is wrong
function DataError(){
  console.error("the data is wrong")
}

// To get data from Server
getData(ConnectToNodeAPI, WebError)

// To get excel files
getData(ConnectToSQL, function(){
  console.log("This is an unspecific error that has no specificity.")
})



function playerTurn(actions) {

  console.log(actions)

  actions.forEach(action => action())
  
}

function attack() {
  console.log("the player attacked.")
}

function defend() {
  console.log("the player defended.")
}

function getPlayerActionsFromWeb(){

  // this was imported from the web! this is just text
  let actionsText = [ 'attack', 'attack', 'defend', 'attack' ]

  // now, I have to create an array of actual functions to send
  // into the playerTurn() function
  let actions = []

  actionsText.forEach( action => {
  
    if ( action == 'attack' )
    {
       actions.push(function(){
         console.log("The player anonymously attacked.")
       })
    }
    else if ( action == 'defend' )
    {
       actions.push(defend)
    }
  })
  
  playerTurn(actions)
  
  
}

getPlayerActionsFromWeb()

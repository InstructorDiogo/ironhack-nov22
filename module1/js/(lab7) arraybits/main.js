
let timeDom = document.getElementById("timer")
let time = 0;
let timer


stopTimer = () => {

  clearInterval(timer)

}

startTimer = () => {

  timer = setInterval(() => {

    time++
    timeDom.innerHTML = time
  
  }, 1000)  

}

// start the time in the beginning of the page
startTimer()

// stop the timer at 5 seconds
setTimeout(stopTimer, 5000)

// start it again 5 seconds after
setTimeout(startTimer, 10000)




const numbers = [5, 1, -5, 9, 4, 6, 7]

function sortArray(numbers) {
  let hasSorted = false

  for (let i = 0; i < numbers.length - 1; i++) {
    // it is not sorted here, so change the value of the two elements
    if (numbers[i] > numbers[i + 1]) {
      // save the first value (as it's going to get substituted)
      let newValue = numbers[i]
      numbers[i] = numbers[i + 1]
      numbers[i + 1] = newValue
      hasSorted = true
      console.log("changed!");
    }
  }

  console.log(numbers)

  if (hasSorted) {
    return sortArray(numbers)
  }
  else {
    return numbers
  }
}

// don't forget to call the function in the end
sortArray(numbers)
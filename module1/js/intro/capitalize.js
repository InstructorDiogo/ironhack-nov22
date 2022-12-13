
let text = "The quick brown fox jumps over the lazy dog"

let textArray = text.split(" ")

for (let i = 0; i < textArray.length; i++)
{
  let word = textArray[i]
  textArray[i] = word[0].toUpperCase() + word.substring(1);
}

console.log(textArray)

// Given a text, counts how many vowels there is in a sentence
countVowels = (text) => {

  let numVowels = 0
  let vowels = ['a', 'e', 'i', 'o', 'u']

  for(let i = 0; i < text.length; i++)
  {
    if (text[i] == 'a' ||
       text[i] == 'e' ||
       text[i] == 'i' ||
       text[i] == 'o' ||
       text[i] == 'u')
    {
      numVowels++
    }
  }

  return numVowels
  
}
// hint, use for loop, string's length etc

console.log(countVowels("The quick brown fox jumps over the lazy dog"))
// ^ you probably will want to console.log() this too
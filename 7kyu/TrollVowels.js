

function disemvowel(str) {
    let answerArray = []
  for ( let test of str) {
      let letter = test.toLowerCase()
      if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
       continue
      }
      else {
          answerArray.push(test)
      }
  }
return answerArray.join('')

}

console.log(disemvowel("This website is for losers LOL!"))
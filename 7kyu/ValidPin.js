

function validatePIN (pin) {
    let answer
    let answerArray = []
    let pinArray = pin.split('')
   
   for (let value of pinArray) {
       let num = parseInt(value)
       if (Number.isNaN(num)) {
           answerArray.push("false")
       }
   }
   if (answerArray.includes("false")) {
    answer = false
   }
   else if (pinArray.length == 4 || pinArray.length == 6) {
       answer = true
   }
   else {
       answer = false
   }
   
    return answer
  }

  console.log(validatePIN("1234"))
  console.log(validatePIN("12345"))
  console.log(validatePIN("123456"))
  console.log(validatePIN("123r56"))
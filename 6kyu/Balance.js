

function balance(left, right) {
  let leftAnswer = 0
  let rightAnswer = 0
  left = left.split('')
  right = right.split('')


  for (let value of left) {
    if (value === "!") {
      leftAnswer += 2
    }
    else {
      leftAnswer += 3
    }
  }

  for (let value of right) {
    if (value === "!") {
      rightAnswer += 2
    }
    else {
      rightAnswer += 3
    }
  }
  let answer

  if (leftAnswer > rightAnswer) {
    answer = "Left"
  }
  else if (rightAnswer > leftAnswer) {
    answer = "Right"
  }
  else {
    answer = "Balance"
  }

  return answer
}


console.log(balance("!??", "?!!"))
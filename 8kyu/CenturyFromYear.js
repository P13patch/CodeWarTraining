

function century(year) {
    let answer
    if (year % 100 === 0) {
        answer = year / 100
    }
    else {
        let int = year / 100
        answer = Math.ceil(int)
    }

    return answer
  }

  console.log(century(1705))
  console.log(century(1900))


function sumDigits(number) {
    let numArray = number.toString().split('')
    let answer = 0
    for (let value of numArray) {
        let num = parseInt(value)
       if (!Number.isNaN(num)) {
           answer += num
       }
    }
    return answer
}

console.log(sumDigits(99))
console.log(sumDigits(-32))
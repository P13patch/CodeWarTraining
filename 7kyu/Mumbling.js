

function accum(s) {
    let answer = []
    let lowerLetters = s.toLowerCase()
    let letters = lowerLetters.split('')
    for (let i = 0; i < letters.length; i++) {
        let rslt = letters[i].toUpperCase()
        if (i === 0) {
            answer.push(rslt)
        }
        else {
            for (let n = 0; n < i; n++) {
                rslt += letters[i]
            }
            answer.push(`-${rslt}`)
        }
    }
    return answer.join('')
}

console.log(accum("abcd"))
console.log(accum("NyffsGeyylB"))
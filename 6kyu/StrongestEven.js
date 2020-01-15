

function strongestEven(n, m) {
    let ansObj = {}

    for (i = m; i >= n; i--) {
         
        if (i % 2 === 0) {
            let count = 0
            let num = i
            while (num % 2 === 0) {
                num = num / 2
                count++
            }
            ansObj[count] = i
        }
    }
    let answer = ansObj[Object.keys(ansObj)[Object.keys(ansObj).length-1]]
    return answer
}

console.log(strongestEven(129,193))
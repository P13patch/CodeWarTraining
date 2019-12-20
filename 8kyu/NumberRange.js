

function generateRange(min, max, step) {
    let answer = []
    let i = min
    while (i <= max) {
        answer.push(i)
        i += step
    }

    return answer
}

console.log(generateRange(1, 10, 3))
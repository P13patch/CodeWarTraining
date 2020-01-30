

var uniqueInOrder = function (iterable) {
    let answer = []
    let first
    if (iterable.length === 0) {
        first = iterable
    }
    else {
        first = iterable[0]
    }

    answer.push(first)
    for (let letter of iterable) {
        if (letter !== first) {
            answer.push(letter)
            first = letter
        }
    }
    return answer
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder([]))
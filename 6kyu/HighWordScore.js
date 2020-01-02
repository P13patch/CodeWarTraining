

function high(x) {
    let answer 
    let maxWord = 0
    const alpha = {
        1: "a",
        2: 'b',
        3: 'c',
        4: 'd',
        5: 'e',
        6: 'f',
        7: 'g',
        8: 'h',
        9: 'i',
        10: 'j',
        11: 'k',
        12: 'l',
        13: 'm',
        14: 'n',
        15: 'o',
        16: 'p',
        17: 'q',
        18: 'r',
        19: 's',
        20: 't',
        21: 'u',
        22: 'v',
        23: 'w',
        24: 'x',
        25: 'y',
        26: 'z'

    }

    let alphaArray = Object.entries(alpha)

    let inputArray = x.split(' ')
    
    for (let word of inputArray) {
        let sWord = word.split('').sort().join('')
        console.log(sWord)
        let wordValue = 0

        for (i = 0; i < alphaArray.length; i++) {
            if (sWord.includes(alphaArray[i][1])) {
                wordValue += parseInt(alphaArray[i][0])
                console.log(wordValue)
            }
        }
        if (wordValue > maxWord) {
            maxWord = wordValue
            answer = word
        }
    }
    return answer
}

console.log(high("sphinx of black quartz judge my vow"))
console.log(high('what time are we climbing up the volcano'))
console.log(high('massage yes'))
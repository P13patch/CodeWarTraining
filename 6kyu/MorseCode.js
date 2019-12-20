

decodeMorse = function (morseCode) {
    var dictionary = {
        "-----": "0",
        ".----": "1",
        "..---": "2",
        "...--": "3",
        "....-": "4",
        ".....": "5",
        "-....": "6",
        "--...": "7",
        "---..": "8",
        "----.": "9",
        ".-": "a",
        "-...": "b",
        "-.-.": "c",
        "-..": "d",
        ".": "e",
        "..-.": "f",
        "--.": "g",
        "....": "h",
        "..": "i",
        ".---": "j",
        "-.-": "k",
        ".-..": "l",
        "--": "m",
        "-.": "n",
        "---": "o",
        ".--.": "p",
        "--.-": "q",
        ".-.": "r",
        "...": "s",
        "-": "t",
        "..-": "u",
        "...-": "v",
        ".--": "w",
        "-..-": "x",
        "-.--": "y",
        "--..": "z",
        "-.-.--": "!",
        ".-.-.-": ".",
        "--..--": ",",
        "...---...": "SOS"
    }
    let code = morseCode.split(' ')
    console.log(code)
    let answer = []
    for (i = 0; i < code.length; i++) {
        if (code[i] == '') {
            answer.push(' ')
        }
        else {
            for (let pair in dictionary) {
                if (pair == code[i]) {
                    answer.push(dictionary[pair])
                }

            }
        }
    }
    
    let newAnswer = answer.join('').toUpperCase().trim()
    return newAnswer.replace(/\s+/g, " ")
}

console.log(decodeMorse('.... . -.--     .--- ..- -.. .'))
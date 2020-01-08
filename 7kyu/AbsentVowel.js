

function absentVowel(x) {
    let answer
    if (x.includes("a")) {
        if (x.includes("e")) {
            if (x.includes("i")) {
                if (x.includes("o")) {
                    answer = 4
                }
                else {
                    answer = 3
                }
            }
            else {
                answer = 2
            }
        }
        else {
            answer = 1
        }
    }
    else {
        answer = 0
    }
return answer
}

console.log(absentVowel("John Doe hs seven red pples under his bsket"))
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"))
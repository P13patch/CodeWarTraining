

function count(string) {
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    let answer = {}

    while (string.length > 0) {

     for (let letter of alpha) {
        if(string.includes(letter)){
            answer[letter] = 1
            string = string.replace(letter, '')
        }
     }
     for ( let letter of string) {
        
         answer[letter] += 1
         string = string.replace(letter, '')

     }

    }


    return answer
}

console.log(count("aba"))
console.log(count("sphinx of black quartz judge my vow"))
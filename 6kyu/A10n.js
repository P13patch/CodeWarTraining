

function abbreviate(string) {
    let firstArray = string.split(' ')
    console.log(firstArray)
    let answer = []
    for (let wordArray of firstArray) {
         console.log(wordArray)
        answer.push(wordArray[0], wordArray[wordArray.length - 1])


    }

    

    let count = 0



}

//console.log(abbreviate('internationalization'))
console.log(abbreviate('elephant-rides are really fun!'))
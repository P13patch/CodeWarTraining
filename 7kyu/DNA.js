


function DNA(dna) {
    let answer = []
    let dnArray = dna.split('')
    for (let letter of dnArray) {
        if (letter === 'A') {
            answer.push('T')
        }
        else if ( letter === 'T') {
            answer.push('A')
        }
        else if (letter === 'G') {
            answer.push('C')
        }
        else {
            answer.push('G')
        }
    }
    return answer.join('')
}

console.log(DNA("ATTGC"))
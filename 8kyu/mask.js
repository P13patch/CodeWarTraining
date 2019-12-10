//write function that hides all but the last four input values

function maskify(cc) {

    let array = cc.split('')
    for ( let i = array.length - 5; i >= 0; i -- ) {
        array[i] = "#"
    }
    let answer = array.join('')
    return answer
}

cc = "12377777777"
console.log(maskify(cc))
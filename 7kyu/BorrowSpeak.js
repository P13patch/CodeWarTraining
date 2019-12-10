//write function that removes punctuation and changes all text to lower case

function borrow(s){
    let string = s.toLowerCase()
    let array = string.split('')
    let correctArray = []
    
    for ( value of array ) {

        if ( value !== ' ' && value !== '!' && value !== '?') {
            
            correctArray.push(value)
            
        }
    }
    return correctArray.join('')
    
}

console.log(borrow('WhAt! FiCK! DaMn CAke?'))
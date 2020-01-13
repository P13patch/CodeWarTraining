

function validate(password) {
    let answer = false

    if (password.length >= 6 && /[0-9]/.test(password) && /[a-z]/.test(password) && /[A-Z]/.test(password)) {

        answer = true

    }
    
    return answer
}


console.log(validate('tG3!5F'))
console.log(validate('a2.d412'))
console.log(validate("0123456789"))

//add all three values. devide total in half
//if total is bigger than biggest value, its a triangle

function isTriangle(a, b, c) {
    let answer
    let compare = (a + b + c) / 2
    if (compare > a && compare > b && compare > c) {
        answer = true
    }
    else {
        answer = false
    }

return answer
}


console.log(isTriangle(1, 2, 2))
console.log(isTriangle(7, 2, 2))
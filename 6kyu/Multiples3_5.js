

function solution(number) {
    let answer = 0
    while (number > 2) {
        number--
        if (number % 3 == 0) {
            answer += number
        }
        else if (number % 5 == 0) {
            answer += number
        }

    }
    return answer
}


console.log(solution(10))
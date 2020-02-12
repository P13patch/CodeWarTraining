

function upArray(arr) {
    
    
    let answer = []

    function testNum(arr) {
        answer1 = false
        for (let number of arr) {
            if (number > 9) {
                answer1 = true
            }
        }
        return answer1
    }


    if (/[-]/g.test(arr)) {
        answer = null
    }
    else if (testNum(arr)) {
        answer = null
    }
    else if (arr[0] == null) {
        answer = null
    }
    else {
        let stringNum = arr.join('')
        let num = parseInt(stringNum) + 1
        num = BigInt(num)
        num = num.toString()
        let answerArray = num.split('')


        for (let number of answerArray) {
            answer.push(parseInt(number))
        }
    }
    return answer
}

console.log(upArray([ 9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7 ]))
console.log(upArray([1, 79]))
console.log(upArray([1, -9]))
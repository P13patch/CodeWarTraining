

function mixedFraction(s) {
    let answer = ''
    let numArray = s.split("/")
    console.log(numArray)


    function reduce(numerator, denominator) {
        var gcd = function gcd(a, b) {
            return b ? gcd(b, a % b) : a;
        };
        gcd = gcd(numerator, denominator);
        return [numerator / gcd, denominator / gcd];
    }


    function mixNum(num1, num2) {
        let wholeNum = 0
        while (num1 > num2) {
            num1 = num1 - num2
            wholeNum += 1
        }
        return [wholeNum, num1, num2]
    }

    
    let reduced = reduce(numArray[0], numArray[1])
    console.log(reduced)

    if (reduced[1] === 1) {
        answer = `${reduced[0]}`
    }

    else if (isNaN(reduced[1])) {
        answer = "Cannot Divide by Zero"
    }

    else if (Math.abs(reduced[0]) < reduced[1]) {
        answer = `${reduced[0]}/${reduced[1]}`
    }
    
    else if (Math.abs(reduced[0]) > reduced[1]) {

        let checkNeg1 = reduced[0].toString().split('')
        let checkNeg2 = reduced[1].toString().split('')


        if (checkNeg1[0] === '-') {
            checkNeg1.shift()
            reduced[0] = checkNeg1.join('')
            let mixArray = mixNum(reduced[0], reduced[1])
            if (mixArray[0] === 0) {
                answer = `-${mixArray[1]}/${mixArray[2]}`
            }
            else {
                answer = `-${mixArray[0]} ${mixArray[1]}/${mixArray[2]}`
            }
        }
        else if (checkNeg2[0] === '-') {
            checkNeg2.shift()
            reduced[1] = checkNeg2.join('')
            let mixArray = mixNum(reduced[0], reduced[1])
            if (mixArray[0] === 0) {
                answer = `-${mixArray[1]}/${mixArray[2]}`
            }
            else {
                answer = `-${mixArray[0]} ${mixArray[1]}/${mixArray[2]}`
            }
        }
        else {
            let mixArray = mixNum(reduced[0], reduced[1])
            answer = `${mixArray[0]} ${mixArray[1]}/${mixArray[2]}`
        }
    }

    return answer
}

//console.log(mixedFraction("5/-4"))
//console.log(mixedFraction("42/9"))
//console.log(mixedFraction("4/6"))
//console.log(mixedFraction("11/11"))
//console.log(mixedFraction("-10/7"))

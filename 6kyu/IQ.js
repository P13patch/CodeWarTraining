

function iqTest(numbers) {

    array = numbers.split(' ')
    console.log(array)

    let evenArray = []
    let oddArray = []
    let value = 0

    for (let i of array) {

        if (i % 2 == 0) {
            evenArray.push(i)
        }
        else {
            oddArray.push(i)
        }

        if (evenArray.length == 1) {
            value = evenArray[0]
        }
        else if (oddArray.length == 1) {
            value = oddArray[0]
        }
    }

    let position = array.indexOf(value)
   
    let answer = position + 1
return answer
    
}


console.log(iqTest('88 96 66 51 14 88 2 92 18 72 18 88 20 30 4 82 90 100 24 46'))


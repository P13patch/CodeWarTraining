

const binaryArrayToNumber = arr => {
    binaryArray = arr.reverse()
    let answer = 0
    for ( let i = 0; i < binaryArray.length; i ++) {
        if (binaryArray[i] == 1) {
            answer += 2 ** i
        }
    }
    return answer
  };

console.log(binaryArrayToNumber([0,0,1,0,1,1,0,1,0]))
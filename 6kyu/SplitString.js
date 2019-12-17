

function solution(str){

    let array = str.split('')
    let start = 0
    let end = 2
    let answer = []
    for ( i = 0; i < array.length; i ++) {
        
        let pair = array.slice(start, end).join('')
        if ( pair.length === 2) {
            
            answer[i] = pair
            
       }
        else if ( pair.length === 1) {
            
            let value = pair.concat('_')
            console.log(value)
            answer[i] = value
            
          
        }
        
        start += 2
        end += 2
        
    }
 return answer
   
}

console.log(solution("abcdefghijklm"))

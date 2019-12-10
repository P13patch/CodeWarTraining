//write a function that doubles the value of each input

function maps(x){
    let answer = []
    x.forEach(item => {
        item = item * 2
        answer.push(item)
    })
    return answer
}

function maps2(x) {
    return x.map( n => n * 2)
}

console.log(maps2([4,1,1,4]))
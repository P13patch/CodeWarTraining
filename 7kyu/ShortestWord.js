

function findShort(s) {
    let wordsArray = s.split(" ")
    let count = []
    for (let word of wordsArray) {
        let num = word.length
        count.push(num)
    }
    count = count.sort((a,b) => (a-b))
    return count[0]
}

console.log(findShort("sphinx of black quartz hear my vow"))
console.log(findShort("lets talk about javascript the best language"))
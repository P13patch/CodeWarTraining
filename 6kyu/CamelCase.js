

function solution(string) {
    let cArray = string.replace(/[A-Z]/g, function replacer(match){return ` ${match}`})
    console.log(cArray)
    return cArray
}

console.log(solution("breakUpCamelCasing"))


function meeting(s) {
    let fixArray = []
    let sArray = s.toUpperCase().split(";")
    for (let person of sArray) {
        let names = person.split(":")
        names[0] = ` ${names[0]}`
        let a = names[1]
        names[1] = names[0]
        names[0] = a
        fixArray.push(`(${names.join(',')})`)
       
    }

    return fixArray.sort().join('')
    
}

console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"))
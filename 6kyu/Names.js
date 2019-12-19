

function list(names) {
    let list = ''
    if (names.length > 1) {
        for (let i = 0; i < names.length; i++) {
            let obj = names[i]
            let name = obj.name
            if (i !== names.length - 2 && i !== names.length - 1) {
                list += `${name}, `
            }
            else if (i !== names.length -1) {
                list += `${name} `
            }
            else {
                list += `& ${name}`
            }

        }
    }
    else if (names.length == 1) {
        list = names[0].name
    }
    else {
        return list
    }

    return list
}

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }]))
console.log(list([{ name: 'Bart' }]))
console.log(list[''])


function rot13(message){
    let newMessage = []
    let alpha = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
    
    for (let letter of message) {
       if (/[a-zA-Z]/.test(letter)) {
        let position = alpha.search(letter.toLowerCase())
       
        position = position + 13
        newMessage.push(alpha[position])
       }
       else {
           
           newMessage.push(letter)
       }
    }
    if (message[0] === message[0].toUpperCase()) {
        newMessage[0] = newMessage[0].toUpperCase()
    }
   
    return newMessage.join("")
  }


  console.log("test", rot13("test"))
  console.log("Ruby is cool!", rot13("Ruby is cool!"))
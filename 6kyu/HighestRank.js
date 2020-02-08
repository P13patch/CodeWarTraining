

function highestRank(arr){
    let collection = {}

    console.log(arr)
    for (let number of arr) {
        
        if (collection[number] === undefined) {
            collection[number] = 1
        }
        else {
            collection[number] += 1
        }
        
    }
        console.log(collection)
        let objEntries = Object.entries(collection)
        let greatPair = objEntries[0]
        console.log(greatPair)
       for (let pair of objEntries) {
    
           if (pair[1] > greatPair[1]) {
               greatPair = pair
           }
           else if (pair[1] == greatPair[1]) {
               

           }
           
          
       }
       console.log(greatPair)

    }


    console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]))
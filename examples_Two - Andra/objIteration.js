function myFunction(obj) {
    let  newObj = {}

    for(i in obj){
        if(i == 'fn' || i == 'ln' || i == 'size' || i == 'weight'){
            if(i == 'size') {
                newObj = obj[i] + "cm"
            }
            if(i == 'weight'){
                newObj = obj[i] + "kg"
            }
        newObj = obj[i]

        }
        else{
            continue
        }
       
    }
    return newObj
}
console.log(myFunction({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67}))
//fn, ln, size, weight

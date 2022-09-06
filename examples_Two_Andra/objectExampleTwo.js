function myFunction (a, b) {

    

    console.log(b in a)
    return
}
console.log(myFunction({a:1,b:2,c: undefined},'c'))
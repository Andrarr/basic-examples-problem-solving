function myFunction (a){
let obj = {}
a.forEach(item => obj[item] = obj[item] + 1 || 1)


return obj

}
console.log(myFunction([9,9,9,99]))
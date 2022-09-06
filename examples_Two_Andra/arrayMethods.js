
let users = ["John", "Andra", "Lum", "Ar"];

console.log(users.filter(user => user.length < 4)) //.filter
console.log("Is there a name with letter 'A'? \n \t" + users.some(user => user.includes('A')))
console.log("Do all names have 'A'? \n \t" + users.every(user => user.includes('A')))

console.log("reverse: " + users.reverse())

users.shift()
console.log(`removing first user ${users}`)
users.unshift('Zart')
console.log(`adding 'Zart' as first user ${users.join("-")}`)
console.log(users.find(user => user.startsWith("A")))

console.log(users.map(user => user+'aj'))
let userStatus = users.fill('done')
userStatus.push('loading')
console.log(userStatus)
console.log("user in position " + userStatus.findIndex(item => item.includes("loading")) + " is loading")
let firstLetters = users.map(user => user[0])
let amount = [4, 2]
let reduced = amount.reduce((pre, curr) => pre - curr)
console.log(reduced)
console.log(amount.reduceRight((pre, curr)=>  pre - curr))


let fruits = ['strawberry', 'apple', 'pear', 'cherry']

let morefruits = [...fruits]


morefruits[0] = ['melon']
console.log(fruits)
console.log(morefruits)
// in this case, the element wont be added to the original array


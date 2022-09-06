// function swapObjectKeysWValues (obj){
//     let result = {}
//     Object.keys(obj).forEach(key => {
//     // console.log(key)
//          result[obj[key]] = key
//     // console.log([obj[key]])
//         }
//         )
//  return result
// }
// console.log(swapObjectKeysWValues({z:'a',y:'b',x:'c',w:'d'}))
function myFunction(obj) {
    let result = {}
    Object.values(obj).forEach(value => {
    if(value == '') {
      result[value[null]]
     }
     result[value[value]]
    })
return result
}
console.log(myFunction({ a: 'a', b: 'b', c: '' }))
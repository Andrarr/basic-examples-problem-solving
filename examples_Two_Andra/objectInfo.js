function getInfo(obj) {
    return {
        fn: obj.fn,
        ln: obj.ln,
        ...(obj.size && {size: obj.size + 'cm'}),
        ...(obj.weight && {weight: obj.weight + 'kg'})
      }
    }
    

console.log(getInfo({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67}))
//needed info - fn, ln, size, weight

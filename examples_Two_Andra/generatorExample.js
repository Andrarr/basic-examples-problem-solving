// function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
//     let iterationCount = 0;
//     for (let i = start; i < end; i += step) {
//       iterationCount++;
//       yield i;
//     }
//     console.log(iterationCount)
//     return iterationCount;
    
//   }
//   console.log(makeRangeIterator)

function* experiment() {

    console.log("Lab wants to add multiple substances for an experiment.")
    console.log()
   let importantSub =  yield "first sub"
   console.log(importantSub)
    yield "second sub"
    console.log("Aluminum")
    yield "final sub"
    return 404
    console.log("Oxygen")
    
}
const experimentOne = experiment() // Creating a generator aka an 'instance' of experiment
// if we dont use the next method, nothing is gonna show
console.log(experimentOne.next())
experimentOne.next("water") // sending an argument to the generator
// console.log(experimentOne.return(6))

console.log(experimentOne.next())
console.log(experimentOne.next())
// experimentOne.throw(new Error ("You have to restart"))
// console.log(experimentOne.next())
// console.log(experimentOne.next())

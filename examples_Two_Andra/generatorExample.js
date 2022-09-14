function* experiment() {
    console.log("Lab wants to add multiple substances for an experiment.")
    let importantSub = yield "first sub"
    console.log(importantSub)
    yield "second sub"
    console.log("Aluminum")
    yield "final sub"
    return 404
}

const experimentOne = experiment() 
console.log(experimentOne.next())
experimentOne.next("water") 
console.log(experimentOne.next())
console.log(experimentOne.next())



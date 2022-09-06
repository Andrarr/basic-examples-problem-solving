
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
}

function topSalaries(salaries) {
    let maxSalary = 0;
    let mostPaid = "";

    console.log(Object.values(salaries[salary]))
    for (let salary iin salaries) {
        console.log(Object.values(salaries[salary]))
        if (maxSalary < Object.values(salaries[salary])) {
            mostPaid = Object.values(salary);
            console.log(salary)
            maxSalary = salary
        }
        else {
            continue
        }
    }

    // console.log(mostPaid)

}


console.log(topSalaries());
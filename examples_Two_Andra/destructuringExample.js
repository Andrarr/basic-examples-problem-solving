let dishes = {
    cabinet: "mug",
    table: "plate",
    hanged: "pot"
};


function dishKeys() {
    let { cabinet: firstFloor, table: secondFloor } = dishes //destructuring, assigning a different variable name
    console.log(firstFloor, secondFloor)

    for (let dish in dishes) {
        if (dish == 'hanged') {
            delete dishes[dish]
        }
    }

    console.log(dishes)
}
dishKeys()

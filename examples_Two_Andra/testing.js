class Gamer {
    #game 
    postalCode = 10000
    constructor(name, experience){
    this.name = name; 
    this.experience = experience;    
    this.#game = "interesting Game"
    }
    get theGame (){
        return this.#game
    }
    set theGame(thisYearsGame) {
        this.#game = thisYearsGame
    }
    
}
class firstGamer extends Gamer{
    constructor(name, experience){
        super(name, experience)
    }
    get gamersName() {
        return this.name
    }
    set gamersName(name) {
        this.name = name
    }
    // get originalGame(){ // can't access #game on this class because it's a private field on parent's class
    //     return this.#game
    // }

}
let uno = new firstGamer("ron", 5)
console.log(uno)

let senior = new Gamer("harry", 15)
console.log(senior)

console.log(senior.theGame) // accessing #game through a method created in parent's class that gets that private field

class User {
    constructor(name,id){
        this.name = name
        this.id = id
    }
    get name (){
        return this.nname
    }
    set name (n) {
        if(n.length < 4){
            console.log("too short")
            return;
        }
        this.nname = n;
    }
    get idOfUser (){
        return this.id
    }
    set idOfUser (id){
        this.id = id
    }
}
let userUno = new User("", 123);

console.log(userUno)
// userUno.id = "4512"
// console.log(userUno.id)
userUno.name= 'fghj'
console.log(userUno.name)

// const student = {
//     constructor(){
//         this.firstName = firstName
//     }
//     //accessor property(setter)
//     set firstName(firstName) {
//         this.firstName = firstName;
//     }
// };

// console.log(student.firstName); // Monica

// // change(set) object property using a setter
// student.changeName = 'Sarah';

// console.log(student.firstName); // Sarah
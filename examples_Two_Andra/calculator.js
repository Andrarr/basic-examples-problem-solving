// let calculator = function(firstNr, secondNr){
    
  
//     function sum(){
// return firstNr + secondNr;
//     }
//     function difference(){
//         return firstNr - secondNr;
//     }        
//     function product(){
//         return firstNr * secondNr;
//     }
//     function divident(){
//         return firstNr * secondNr;
//     }
//     return {sum, difference, product, divident}
    
// }
// let twoAndFour = calculator(2, 4);
// console.log(twoAndFour.sum())

class calculator{
    constructor(firstNr, secondNr){
        this.firstNr = firstNr;
        this.secondNr = secondNr;
    }
}
class sum extends calculator {
    constructor(firstNr, secondNr, nrthree){
        super(firstNr, secondNr);
        
        this.nrthree = nrthree
    }

     sum(){
         return this.firstNr + this.secondNr
     }
 
}
const calculating = new sum(5,2)
console.log(calculating.sum())
// class divide extends calculator {
//     constructor(firstNr, secondNr)
// }


// const calc12And5 = Calculator(12, 5);
// calc12And5.sum();                       // 17
// calc12And5.difference();                // 7
// calc12And5.product();                   // 60
// calc12And5.dividend();  
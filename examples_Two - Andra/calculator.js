let calculator = function(firstNr, secondNr){
    
    let shuma = 0;
    function sum(){
return firstNr + secondNr;
    }
    function difference(){
        return firstNr - secondNr;
    }        
    function product(){
        return firstNr * secondNr;
    }
    function divident(){
        return firstNr * secondNr;
    }
    return {sum, difference, product, divident}
    
}
let twoAndFour = calculator(2, 4);
console.log(twoAndFour.sum())




// const calc12And5 = Calculator(12, 5);
// calc12And5.sum();                       // 17
// calc12And5.difference();                // 7
// calc12And5.product();                   // 60
// calc12And5.dividend();  
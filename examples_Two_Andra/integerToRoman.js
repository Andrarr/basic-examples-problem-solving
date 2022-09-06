// 0 to 3999
function integerToRoman(nr) {
    let result = '';
    // let symbols = { 

    let number = 0;
    while (nr > 0) {
        if (nr >= 1000) {
            result += "M"
            nr -= 1000;
        }
        else if (nr >= 500) {
            if (nr + 100 >= 1000) {
                result += 'CM';
                nr -= 900;
            } else {
                result += "D"
                nr -= 500;
            }
        }
        else if (nr >= 100) {
            if (nr + 100 >= 500) {
                result += "CD";
                nr -= 400;
            } else {
                result += "C";
                nr -= 100;
            }

        }
        else if (nr >= 50) {
            if (nr + 10 >= 100) {
                result += "XC";
                nr -= 90;
            } else {
                result += "L";
                nr -= 50;
            }

        }
        else if (nr >= 10) {
            if (nr + 10 >= 50) {
                result += "XL";
                nr -= 40;
            } else {

                result += "X"
                nr -= 10
            }
        }
        else if (nr >= 5) {
            if (nr + 1 >= 10) {
                result += "IX";
                nr -= 9;
            } else {
                result += "V"
                nr -= 5
            }
        }
        else if (nr >= 1) {
            if (nr + 1 >= 5) {
                result += "IV";
                nr -= 4;
            } else {
                result += 'I'
                nr -= 1
            }
        }

    }
    return result
}

console.log(integerToRoman(99))
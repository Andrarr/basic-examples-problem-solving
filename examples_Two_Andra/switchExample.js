function switchExample(x, y, sign){
    switch(sign){
        case '+': 
            return x +y;
        case '-':
            return x -y;
        case '*':
            return x*y;
        case '/':
            return x/y;
        default:
            return 'Wrong! Try again'
    }

}
console.log(switchExample(4, 2, '='))
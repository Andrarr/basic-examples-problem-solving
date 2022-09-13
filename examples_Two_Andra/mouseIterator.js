const mouse = {

    [Symbol.iterator]: function() { 
        let floor = 0;
        return {
            next() {
                floor++;
                if(floor == 1){
                    return {value: floor, done:false}
                }
              
                return { value: '', done: true };  
            }
        }
        
    }
}
for (i of mouse){
    console.log(i)
}

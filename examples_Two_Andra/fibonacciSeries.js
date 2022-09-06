// 3. Create a function that prints the last X fibonacci numbers smaller than Y.
// Bonus point if you make the function recursive.
// (Hint: Fibonacci series is a mathematical series, where each number is a sum of the previous two numbers: 1, 1, 2, 3, 5, 8, 13, 21,...)

// Examples func(X: int, Y: int):
// func(2, 3) => 1,2
// func(4, 6) => 1,2,3,5
// func(3, 100000) => 28657,46368,75025

// the last x fibonacci numbers smaller than y
function fibonacciSeries(x,y){
    let first = 0;
    let second = 1;
    let nextNumber = 0;

    let arr =[];
    for(let i=0; i<y;i++){ // nextNumber < y
        if((first+second) < y){
            nextNumber = first+second; // 0,1,1,2,3,5,8,13
            first = second; //8
            second = nextNumber //13
            arr.push(nextNumber)
            
        }
    }
    console.log(arr);
    let modifiedArr = arr.slice(-x);

    return modifiedArr;

}
console.log(fibonacciSeries(3,100000))


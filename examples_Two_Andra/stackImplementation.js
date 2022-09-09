class Stack {
    constructor(elements){
        this.elements = elements
    }
    push (item){
        return this.elements.push(item)
    }
    pop (){
        return this.elements.pop()
    }
    print (){
        console.log(this.elements)
    }

}
let stack = new Stack ([1,5,3])
stack.push(5)
stack.push(3)
stack.pop()
console.log(stack)

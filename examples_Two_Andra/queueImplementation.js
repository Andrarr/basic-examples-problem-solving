class Queue {
    constructor(elements){
        this.elements = elements
    }
    print () {
        console.log(this.elements)
    }
    enqueue (item) {
        return this.elements.push(item)
    }
    dequeue (item) {
       return this.elements.shift(item);
    }

}
let first = new Queue([2,5,6])
first.enqueue(4)
first.enqueue(8)
first.dequeue(2)
console.log(first)
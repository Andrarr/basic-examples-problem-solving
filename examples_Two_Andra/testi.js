class Animal {
    showName(type) {
        console.log(type);
    }
    
    constructor() {
        this.showName()
        
    }
}
class Rabbit extends Animal {

    showName(type){
        console.log(type)
    }
}
new Animal("animal");
new Rabbit();
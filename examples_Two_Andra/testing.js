let gamer = {
    name: 'Gamer',
    play: function(types) {
        console.log(this.name + ' plays ' + types + ' types of games.');
    }
};
let firstGamer = gamer.play.bind(gamer, 20)
console.log(firstGamer())
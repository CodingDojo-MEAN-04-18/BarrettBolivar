
function Deck(){
    this.deck = [];
};

Deck.prototype.reset = function(){
    this.deck = [];
    var suits = ['Clubs', 'Hearts', 'Diamonds', 'Spades'];
    var numbers = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    for(var suit in suits){
        for(var pip in numbers){
            this.deck.push(numbers[pip] + " of " + suits[suit]);
        }
    }
    return this;
};

Deck.prototype.shuffle = function(){
    var m = this.deck.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = this.deck[m];
        this.deck[m] = this.deck[i];
        this.deck[i] = t;
    }
    return this;
}

Deck.prototype.deal = function(){
    return this.deck.pop();
}

var Player = function Player(name){
    this.name = name;
    this.hand = [];
}

Player.prototype.draw = function(deck){
    this.hand.push(deck.deal());
    return this;
}

Player.prototype.discard = function(){
    this.hand.pop();
    return this;
}

var deck1 = new Deck();
deck1.reset().shuffle();
var player1 = new Player("Nina");
player1.draw(deck1).draw(deck1);
console.log(player1);
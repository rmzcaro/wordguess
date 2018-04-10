var Letter = require("./letter.js")

 function Word(word){
    this.new = [];
    this.word = word; 
    this.strWord = function(){
        Letter.call()
    }
    // this.char = function(char){
    // }
}


// example 
// function Food(name, price) {
//     Product.call(this, name, price);
//     this.category = 'food';
//   }

var letter1 = new Letter("a");
letter1.ifGuess();
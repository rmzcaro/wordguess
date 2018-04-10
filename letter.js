// dependency for inquirer npm package
var inquirer = require("inquirer");

function Letter(char){
    // stores placeholder or character takes in string
   this.char = char; 
   //stores whether guess was made or note - takes in boolean
   this.guessMade = false; 
   // A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
     this.ifGuess = function(){
        if(this.guessMade){
            console.log(this.char);
        } else {
            console.log("_");
        }
    }
}

//test 
// var letter1 = new Letter("a");
// letter1.ifGuess();

// allow for other docs to see letter constructor 
module.exports = Letter
var Letter = require("./letter.js")

function Word(word, arrayOfWords, letterObjects, wrongletters) {
    //holds the array of words
    this.arrayOfWords = ["ski","surf", "dance", "jump"];    
    // holds the word that is chosen 
    this.word = word;
    //number of blanks in array of words
    this.blank = 0; 
    //represents the letters of the new  underlying word
    this.letterObjects = [];
    //letters guessed wrong
    this.wrongletters = [];
    // letters in the word 
    this.letterStr= function(){
        word =  arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)];
// -------- paused here ------- Line 33 in HW Instructions ------------------
        // return word.split("");
        //ifGuess goes here
    }
 
    // split the word in a letters array
    // for each letter create a letter object
    // this is what I need to add to letters object array
    //for each letter create two objects, one for spaces, one for objects

console.log(word);


}

Word();


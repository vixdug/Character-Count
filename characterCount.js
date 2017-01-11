/*Write a function **countLetters** that can (return to) us us all the unique characters that exist in a string that is passed into the function. The function should also report back how many instances of each letter were found in the string.Our function countLetters needs to return an object that can represent the stats for the sentence it is given. */
var example = "Loopy Lighthouse"
var letters = new Object;

// function splits the string into characters and removes spaces. Uses letters Object to store value. Using ternary operator as the conditional to add 1 if the letter repeats.

function countLetters(string){
  var splitString = string.split(" ").join("")
    for (var i = 0; i < splitString.length; i++) {
      var l = string.charAt(i)
      letters[l] = (isNaN(letters[l]) ? 1 : letters[l] + 1);
      }
      return(letters);
}

function print(output){
  console.log(output)
}


countLetters(example);
print(letters)

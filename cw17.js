//Capitalization and Mutability 8kyu

/*Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.
*/

//PSEUDO CODE
//single out the first letter
//use .toUpperCase() to capitalize it
//join it back with the rest of the string starting at the 2 letter

//MY ATTEMPT
function capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  } // I think I did good here!

//OTHER SOLUTIONS
const capitalizeWord = (word) => word.replace(word.charAt(0), word.charAt(0).toUpperCase());
//one line ternary with .replace(), that's pretty cool, did not know that was a thing
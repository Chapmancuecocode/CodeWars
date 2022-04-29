//Plural 8kyu

//We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

//PSEUDO CODE
//Only when it's 1 is it singular, thus needing a false, every other time it's plural/true
//conditional that checks for 1

//MY ATTEMPT
function plural(n) {
    if(n === 1) {
      return false
    }else{
      return true
    }
  } //Works but let's try it with a ternary

//TERNARY ATTEMPT
function plural(n) {
    return n === 1 ? false : true
  } // I kind of did it?! I think!?

//OTHER SOLUTIONS
function plural(n) {
    return n !== 1;
  } // Clever girl
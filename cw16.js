//Short Long Short 8yku

/*Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

Hint for R users:

The length of string is not always the same as the number of characters
For example: (Input1, Input2) --> output

("1", "22") --> "1221"
("22", "1") --> "1221"
*/

//PSEDUO CODE 
//compare length of argument a and argument b
//create empty string
//concatonate a and b accordingly

//MY ATTEMPT
function solution(a, b){
    let string = ''
    if(a.length > b.length){
      return string + b + a + b
    }else{
          return string + a + b + a
    }
  } //thought that .length() could only be used by arrays so spent too much time trying to turn them into arrays and back

//OTHER SOLUTIONS
function solution(a, b) {
    return a.length < b.length ? a + b + a : b + a + b
  } //single line answer, much better than mine, should start to look into ternary operations!!!!<--
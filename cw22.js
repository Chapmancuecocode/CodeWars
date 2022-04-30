//Reversed Strings 8kyu

//Complete the solution so that it reverses the string passed into it.
//'world'  =>  'dlrow'
//'word'   =>  'drow'

//PSUEDO CODE
//We can do this in one line, from left to right use, split, reverse, join

//MY ATTEMPT
function solution(str){
    return str.split('').reverse().join('')
  } //BOOM, clean as ..

//OTHER SOLUTIONS
const solution = str => str.split('').reverse().join('') //even cleaner and a true one liner
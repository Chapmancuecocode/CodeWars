//Remove String Spaces 8kyu
//Simple, remove the spaces from the string, then return the resultant string.

//PSUEDO CODE
//we can split it up by ' ' and rejoin them with ''

//MY ATTEMPT
function noSpace(x){
    return x.split(' ').join('')
  } //1 liner! fairly simple though

//OTHER SOLUTIONS
//Seems to be the best way to do it without having to use regex!
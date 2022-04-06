//Removing Elements 8kyu

//Take an array and remove every second element from the array. Always keep the   // first element and start removing with the next element.
//Example:
//["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", .//..]
//None of the arrays will be empty, so you don't have to worry about that!

//PSEUDO CODE
//use filter method to remove every second element... in this case the indexes would all be odd! AHA

//MY ATTEMPT
function removeEveryOther(arr){
    return arr.filter((_,i) => i % 2 === 0)
  } //nothing too complex here
// Highest and Lowest 7kyu

//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

//Examples
//highAndLow("1 2 3 4 5");  // return "5 1"
//highAndLow("1 2 -3 4 5"); // return "5 -3"
//highAndLow("1 9 3 4 -5"); // return "9 -5"
//Notes
//All numbers are valid Int32, no need to validate them.
//There will always be at least one number in the input string.
//Output string must be two numbers separated by a single space, and highest number is first.

//PSUEDO CODE
//use .split() to turn spaced strings into an array
//use .sort((a,b) => a - b) to sort from lowest to highest, can also use .sort((a,b) => b - a) to sort from highest to lowest
//return 0th index of sorted array and last element of the array using .length - 1

//MY ATTEMPT
function highAndLow(numbers){
    let splitUp = numbers.split(' ')
    let sort = splitUp.sort((a,b) => a - b)
    return (`${sort[sort.length - 1]} ${sort[0]}`)
  } //pretty simple, got the hang of it

//OTHER SOLUTIONS
function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  } //Ah yes, Math.max and min is a thing!
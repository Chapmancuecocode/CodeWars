//Freudian translator 8kyu

//Replace every word in a string with the word 'sex'. Yes this is a real codewars challenge

//PSEUDO CODE
//Seperate string word by word
//use map(' ') to replace each word with 'sex'
//use if con to check for empty string?
//return the new array of sex with join(' ')

//MY ATTEMPT
function toFreud(string) {
    let arr = string.split(' ')
    let newArr = arr.map(x => 'sex')
    if(string === ''){
      return ""
    }else{
    return newArr.join(' ')
    }
  }

//User solutions
var toFreud=s=>s.replace(/[^ ]+/g, 'sex') //Ummmm okay

//Mine but better
const toFreud = str => str === '' ? '' : str.split(' ').map(e => 'sex').join(' ')

//Replace works here possibly better

//Reverse words 7kyu

//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//PSEUDO CODE
//seperate the string into each word
//reverse each word
//join back each word

//MY ATTEMPT
function reverseWords(str) {
    let arr = str.split(' ')
    let rev = arr.reverse()
    return rev.join('')
}

//I looked up some solutions after 20 minutes
function wordsReverser(string){
    return string.split("").reverse().join("").split(" ").reverse().join(" ")  
}

//So they split the string into letters, reversed the order of the letters. Joined them back up, then split by word, reversed them and joined them back up. So smart

//One more solution
function reverseWords(str) {
    return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ')
}
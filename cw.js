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
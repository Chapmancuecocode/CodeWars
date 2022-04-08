//Sum of Odd Cubed Numbers 7kyu

//Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

//PSEUDO CODE
//filter out even numbers
//cube remaining numbers
//return total sum
//don't need code to satisfy undefined condition, cubing a string should return that, right?

//MY ATTEMPT
function cubeOdd(arr) {
  
    let oddNums = arr.filter(e => e % 2 !== 0)
    let cubedNums = oddNums.map(e => e**3)
    if(cubedNums === NaN){
      return undefined
    }else{
    return cubedNums.reduce((acc, c) => acc + c, 0)
    }
  } //Works but returns NaN instead of undefined... maybe try: filtering out strings? ... but then we're not returning undefined

 //SECOND ATTEMPT
 function cubeOdd(arr) {
    let noStr = arr.filter(e => typeof e !== 'string')
    let oddNums = noStr.filter(e => e % 2 !== 0)
    let cubedNums = oddNums.map(e => e**3)
    return cubedNums.reduce((acc, c) => acc + c, 0)
  } //but now we're not returning 'undefined' because we're just filtering out the strings instead of returning 'undefined'


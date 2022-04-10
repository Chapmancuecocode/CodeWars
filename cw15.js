//To square(root) or not to square(root)

/*Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null.
*/

//PSEUDO CODE
//map through each number, if there is zero remainder after its been square-rooted, square-root the number, else square it

//MY ATTEMPT 
function squareOrSquareRoot(array) {
    return array.map(e => {
      if(Math.sqrt(e) % 1 === 0){
        return Math.sqrt(e)
      }else{
        return e*e
      }
    })
  }

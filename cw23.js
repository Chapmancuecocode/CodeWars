//Sort Nums 7kyu

/*Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/

//PSUEDO CODE
//Use conditional to check for null
//use .sort((a,b) => a-b) numerically

//MY ATTEMPT
function solution(nums){
    if(nums === null){
      return []
    }else{
        return nums.sort((a,b) => a-b)
    }
  } //Not the cleanest, can probably try using a ternary?

//OTHER SOLUTIONS
function solution(nums){
    return nums !== null ? nums.sort(function(a,b){return a-b}) : [];
} //Much cleaner, I like the use of !==
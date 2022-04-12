//How good are you really? 8kyu

/*There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/

//PSUEDO CODE
//Add all scores together including your own
//find average using variable above, divided by length of classPoints array and plus 1(yours)
//return true / false depending on yourPoints

//MY ATTEMPT
function betterThanAverage(classPoints, yourPoints) {
    let totalPoints = classPoints.reduce((acc ,c) => acc + c, 0) + yourPoints
    let classAverage = (totalPoints / (classPoints.length + 1))
    if(yourPoints > classAverage){
      return true
    }else{
      return false
    }
  }// Easy enough but not super DRY

//This is how its done
function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
  }
  
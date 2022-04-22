//Cat years, Dog years 8yku

/*I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/

//PSEUDO CODE
//feeling sick, we'll do this the long hard way
//let cY and dY equal 15
//add 9 to each if human years is 2
//add 9 + 4*humanYears for cat and 9 + 5*humanYears for dog

//MY ATTEMPT
var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 15
    let dogYears = 15
    if(humanYears === 1){
      return [humanYears,catYears,dogYears]
    }else if(humanYears === 2){
      return [humanYears, catYears + 9, dogYears + 9]   
    }else{
      return [humanYears, catYears + 9 + (4 * humanYears - 8), dogYears + 9 + (5 * humanYears - 10)]
    }
  }

//OTHER SOLUTIONS
var humanYearsCatYearsDogYears = function(y) {
    if (y == 1) return [1, 15, 15]
    if (y == 2) return [2, 24, 24]
    return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
  } //Mine but better, I just had to compact it more, and also using y instead of humanYears makes it look a lot better
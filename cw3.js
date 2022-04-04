//Sum of positive 8kyu

//You get an array of numbers, return the sum of all of the positives ones.

//PSUEDO CODE
//filter for positive numbers
//sum up all numbers

//MY ATTEMPT
function positiveSum(arr) {
    let positiveNums = arr.filter(num => num > 0)
    return positiveNums.reduce((acc, c) => acc + c, 0)
}
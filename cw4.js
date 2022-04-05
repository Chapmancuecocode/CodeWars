//Merge two sorted arrays into one 8kyu

//You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

//You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If //both arr1 and arr2 are empty, then just return an empty array.

//Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove //duplicated in the returned result.

//PSEUDO CODE
//join both arrays
//sort them from lowest to highest
//ammendment: must also remove duplicates

//My attempt
function mergeArrays(arr1, arr2) {
    let mergedArr = arr1.concat(arr2)
    let sortedArr = mergedArr.sort((a,b) => a-b)
    let finalArr = [...new Set(sortedArr)] //'Set' creates a new set without the duplicates, then [] puts them into an array
    return finalArr
} //Defs not dry

//Much cleaner than mine
function mergeArrays(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
}

//Much much cleaner
function mergeArrays(a, b) {
    return [...new Set(a.concat(b))].sort((a,b)=>a-b)
}
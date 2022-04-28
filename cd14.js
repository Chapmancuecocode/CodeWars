//Shuffle It 8kyu

/*Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"
*/

//PSEUDO CODE
//split string into words and into an array
//reverse said array
//join them back up into a string in the reversed order

//MY ATTEMPT
function nameShuffler(str){
    let arr = str.split(' ')
    let shuffle = arr.reverse()
    return shuffle.join(' ')
}
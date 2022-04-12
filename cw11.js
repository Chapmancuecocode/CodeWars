//Check same case 8kyu

/*Write a function that will check if two given characters are the same case.

If any of characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters and not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
*/

//PSUEDO CODE
//Check if both are both parameters are letters
//if one of them isn't, return -1
//if they both are use conditional to se if they are equal in value and type
//if they are return 1, else return 0

//MY ATTEMPT
//few problems, tried just checking for case sensitivity, but empty strings and ':' return true for a === a.toUpperCase()/.toLowerCase(). Thinking I could check to see that .toLowerCase != .toUpperCase, but code will definetly not be short and sweet.
function sameCase(a, b){
    if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
      return -1
    }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
        return 1
    }else{
      return 0
    }
  } //Done did it

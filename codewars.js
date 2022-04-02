//Rock Paper Scissors! 8kyu

//Let's play! You have to return which player won! In case of a draw return Draw!.
//Should be easy enough

//PSEUDO CODE
//Use 'if' conditional, put all the p1 wins outcomes first, then p2 wins in 'else if' and the Draw! in 'else'

//My attempt
const rps = (p1, p2) => {
    if(p1 === 'rock' && p2 === 'scissors' || p1 === 'paper' && p2 === 'rock' || p1 === 'scissors' && p2 === 'paper'){
      return('Player 1 won!')
    }else if(p1 === 'rock' && p2 === 'paper' || p1 === 'paper' && p2 === 'scissors' || p1 === 'scissors' && p2 === 'rock'){
      return('Player 2 won!')
    }else{
      return('Draw!')
    }
};
//Defs not the most efficient, let's see what others did!

//Other better solutions
const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    if (p2 === rules[p1]) {
      return "Player 1 won!";
    }
    else {
      return "Player 2 won!";
    }
}; //What??? var rules is a thing??? I will be lok=king that up

//Mine but better
const rps = (p1, p2) => {
    if (p1 == p2)
      return 'Draw!';
      
     if (p1 == 'rock' && p2 == 'scissors') 
       return 'Player 1 won!'
     else if (p1 == 'scissors' && p2 == 'paper') 
       return 'Player 1 won!'
     else if (p1 == 'paper' && p2 == 'rock') 
       return 'Player 1 won!'
     else
       return 'Player 2 won!';
}; //smart, using else for player 2 outcomes
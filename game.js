
function playGame(){
  
//ask player for a number 1-4
var ask1 = prompt("player one , Tell a number 1-4");
//ask player2 for a number 1-4
var ask2 = prompt("Player two, Tell a number 1-4 ");
//scold player players if they enterd number larger than range end game
if((ask1<1 || ask1>5)||(ask2<1 || ask2>4)){
  window.alert("You cheated")
  return;
}

//if both player is in range both wins
if(ask1 === ask2){
  window.alert("you both are winners");
}
//else they both lose and say that they are loser
else{
  window.alert("you both lose.Player 0ne choose " + ask1 + "and palyer2 choose " + ask2)

}
}

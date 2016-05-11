// This waits till the page finishes loading before running the code inside the {}
$(document).ready(function() {
  var computerWeapon = "tesla"

  function choseRock(){
    console.log("You chose rock")
    if(computerWeapon == "rock"){
      alert("It's a tie!")
    } else if(computerWeapon == "scissors"){
      alert("You win!!!")
    } else if(computerWeapon == "paper"){
      alert("You lost :(")
    } else {
      alert("Oops, something went wrong. It's not a win/loss/tie")
    }
  }

  function chosePaper(){
    console.log("You chose paper")
  }

  function choseScissors(){
    console.log("You chose scissors")
  }

  $("#rock").click(choseRock)
  $("#paper").click(chosePaper)
  $("#scissors").click(choseScissors)

});

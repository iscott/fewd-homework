$(document).ready(function(){


  // alert("Wait, don't leave this page yet. Click here for a special offer!")
  $("h1").click(
    function(){
      alert("You clicked the headline")
    }
  )

  // var color = prompt("What color?")
  // console.log(color)
  //
  // color = "black"
  // console.log(color)

  var firstNum = 2
  var secondNum = 2
  var answer = firstNum * secondNum
  console.log("Your total is: ")
  console.log(answer)

  if( answer == 1 ){
    alert("Woohoo!! The answer is one!!!!")
  }

  var lightSwitch = true

  if( lightSwitch == true ){
    alert("The lights are on")
  }else{
    alert("The lights are OFF`")
  }

});

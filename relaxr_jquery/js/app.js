// This waits till the page finishes loading before running the code inside the {}
$(document).ready(function() {

  // Targets anything with a class="readmore" and adds a click listener
  // If it's clicked, runs the showAdditionalText function
  $("#sidebar").click(showAdditionalText)
  $(".readless").click(hideAdditionalText)

  // This is the showAdditionalText function
  function showAdditionalText(){
    // this is the code that runs when you run the showAdditionalText function:

    console.log(this)
    // $("#show-this-on-click").slideDown()
    // $(this).hide()
    // $(".readless").show()
    event.preventDefault() //Prevents browser from scrolling to the top when clicking
  }

  function hideAdditionalText(){
    // this is the code that runs when you run the showAdditionalText function:
    $("#show-this-on-click").hide()
    $(".readless").hide()
    $(".readmore").show()
    event.preventDefault() //Prevents browser from scrolling to the top when clicking
  }

});

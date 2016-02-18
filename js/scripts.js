$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var gender = $("select#gender").val();

    // $(.results).hide(); div class for results where it only shows current result

    if (gender === 'woman') {
      if (x === ""){
    $("#container1").show();
    // $("#container").hide();
  } else {
    $("#container2").show();
    // $("#container").hide();
  }
} --- multiple if statements embedded

  event.preventDefault();

  });
});

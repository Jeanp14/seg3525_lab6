function selectM(){
  document.getElementById("g").innerHTML = "Male";
}

function selectF(){
  document.getElementById("g").innerHTML = "Female";
}

function selectO(){
  document.getElementById("g").innerHTML = "Other";
}
function selectY(){
  document.getElementById("yn").innerHTML = "Yes";
}

function selectN(){
  document.getElementById("yn").innerHTML = "No";
}

$(document).ready(function(){

  $('#submitButton').on('click', function(){
      
      // var item = $('form input');
      // console.log(item.serializeArray());

      $.ajax({
        type: 'POST',
        url: '/survey',
        data: $(this).serializeArray(),
        success: function(data){
          // do something with the data via front-end framework
          // Make the submit button red, disabled and saying Thank you
          $("#submitButton").css("background-color", "red");
          $("#submitButton").prop("disabled", "true");
          $("#submitButton").text("Thank you!");
        }
      });
      return false;
  });
});
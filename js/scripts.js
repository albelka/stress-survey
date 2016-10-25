var healthTally = 0;
var tally = function(){

    healthTally +=1;
    console.log(healthTally);
  return healthTally;
}



$(document).ready(function(){
  $("form#stress_survey").submit(function(event){
    event.preventDefault();
    $("#warning-responses").show();
    $("input:checkbox[name=warning_signs]:checked").each(function(){
      var warningResults = $(this).val();
      tally();
      $('#warning-responses').append(warningResults + "<br>");
    });
    $("#health-responses").show();
  $("input:checkbox[name=health_problems]:checked").each(function(){
    var healthResults = $(this).val();
    tally();

    $('#health-responses').append(healthResults + "<br>");
  });

  $("#coping-responses").show();
$("input:checkbox[name=coping_methods]:checked").each(function(){
  var copingResults = $(this).val();
  $('#coping-responses').append(copingResults + "<br>");
});
    if (healthTally > 4) {
      $(".doctor").show();
    } else {
    $(".healthy").show();
  }
    $('#stress_survey').hide();
  });
});

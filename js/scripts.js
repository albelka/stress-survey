$(document).ready(function(){
  $("form#stress_survey").submit(function(event){
    event.preventDefault();
    $("#warning-responses").show();
    $("input:checkbox[name=warning_signs]:checked").each(function(){
      var warningResults = $(this).val();
      $('#warning-responses').append(warningResults + "<br>");
    });
    $("#health-responses").show();
  $("input:checkbox[name=health_problems]:checked").each(function(){
    var healthResults = $(this).val();
    $('#health-responses').append(healthResults + "<br>");
  });
  $("#coping-responses").show();
$("input:checkbox[name=coping_methods]:checked").each(function(){
  var copingResults = $(this).val();
  $('#coping-responses').append(copingResults + "<br>");
});
    $('#stress_survey').hide();
  });
});

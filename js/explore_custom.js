$(document).ready(function()
{
  $('#tour_planner-button').click(function() {
    if($(this).css("margin-left") == "600px")
    {
        $('.tour_planner').animate({"margin-left": '-=600'},900);
        $('#tour_planner-button').animate({"margin-left": '-=600'},900);
    }
    else
    {
        $('.tour_planner').animate({"margin-left": '+=600'},900);
        $('#tour_planner-button').animate({"margin-left": '+=600'},900);
    }


  });
 });     
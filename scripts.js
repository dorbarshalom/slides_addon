var slideWidth = 1045;
var slideHeight = 587; 

var currentPosition = "top-left";

var slidePadding = 30; 

$(document).ready(function(){
    $("#presenters img").click(function(e){
      console.log(e);
        $("#slide img").attr("src", e.target.src);
    });


    $("#position").change(function () {

        var presenterW = $("#presenter img").innerWidth();
        var presenterH = $("#presenter img").height();
    
        var moveTo = $("#position").val(); 

        currentPosition = moveTo;

        if (moveTo == "top-left"){
          positionPresenter(0 + slidePadding, 0 + slidePadding);
        }
        else if (moveTo == "top-right"){
          positionPresenter(0 + slidePadding, slideWidth - presenterW - slidePadding);
        }
        else if (moveTo == "bottom-left") {
          positionPresenter(slideHeight - presenterH - slidePadding ,0 + slidePadding);
        }
        else if (moveTo == "bottom-right"){
          positionPresenter(slideHeight - presenterH - slidePadding, slideWidth - presenterW - slidePadding);
        }
    });

    // let's see if this comment goes away

    function positionPresenter(x,y){
      $("#presenter").css({top: x, left: y});
    };

    $("#size button").click(function () {
        $("#presenter img").removeClass();
        $("#presenter").removeClass();
        $("#presenter img").addClass($(this).attr("value"));
        $("#presenter").addClass($(this).attr("value"));

        // console.log($(this).attr("value"));
    });    

    positionPresenter(slidePadding, slidePadding);

    //choose background color
    $("#bg li").click(function () {
       $("#presenter").css("background-color", $(this).attr("color"));
    });

});

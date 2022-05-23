var slideWidth = 1045;
var slideHeight = 587; 

var slidePadding = 30; 

xPos = 0 + slidePadding;
yPos = 0 + slidePadding;


$(document).ready(function(){
    $("#presenters img").click(function(e){
      console.log(e);
        $("#slide img").attr("src", e.target.src);
    });


    $("#position").change(function () {

        positionPresenter();
    });

    function positionPresenter(){

      var presenterW = $("#presenter img").innerWidth();
        var presenterH = $("#presenter img").height();
    
        var moveTo = $("#position").val(); 

        if (moveTo == "top-left"){
          xPos = 0 + slidePadding; 
          yPos = 0 + slidePadding;
        }
        else if (moveTo == "top-right"){
          xPos = 0 + slidePadding;
          yPos = slideWidth - presenterW - slidePadding;
        }
        else if (moveTo == "bottom-left") {
          xPos = slideHeight - presenterH - slidePadding;
          yPos = 0 + slidePadding;
        }
        else if (moveTo == "bottom-right"){
          xPos = slideHeight - presenterH - slidePadding;
          yPos = slideWidth - presenterW - slidePadding;
        }

      $("#presenter").css({top: xPos, left: yPos});
    };

    $("#size button").click(function () {
        
        if($(this).attr("value") == "sm"){
          $("#presenter img").css("width", "80px");
          $("#presenter img").css("height", "80px");
          $("#presenter").css("width", "80px");
          $("#presenter").css("height", "80px");
        }
        else if($(this).attr("value") == "md"){
          $("#presenter img").css("width", "160px");
          $("#presenter img").css("height", "160px");
          $("#presenter").css("width", "160px");
          $("#presenter").css("height", "160px");
        }
        else if($(this).attr("value") == "lr"){
          $("#presenter img").css("width", "240px");
          $("#presenter img").css("height", "240px");
          $("#presenter").css("width", "240px");
          $("#presenter").css("height", "240px");
        }
        setTimeout(positionPresenter,300);
        
    });    

    positionPresenter(slidePadding, slidePadding);

    //choose background color
    $("#bg li").click(function () {
       $("#presenter").css("background-color", $(this).attr("color"));
    });

    $("#slides-panel li").click(function () {
      //console.log("img/slides/" + $(this).attr("value") + ".png");
      $("#slide-box").css("background-image", "url(img/slides/" + $(this).attr("value") + ".png)");
    });  


});

var slideWidth = 1045;
var slideHeight = 587; 

var slidePadding = 30; 

xPos = 0 + slidePadding;
yPos = 0 + slidePadding;

var sm = "80px";
var md = "160px";
var lr = "240px";

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
          $("#presenter img").css("width", sm);
          $("#presenter img").css("height", sm);
          $("#presenter").css("width", sm);
          $("#presenter").css("height", sm);
        }
        else if($(this).attr("value") == "md"){
          $("#presenter img").css("width", md);
          $("#presenter img").css("height", md);
          $("#presenter").css("width", md);
          $("#presenter").css("height", md);
        }
        else if($(this).attr("value") == "lr"){
          $("#presenter img").css("width", lr);
          $("#presenter img").css("height", lr);
          $("#presenter").css("width", lr);
          $("#presenter").css("height", lr);
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

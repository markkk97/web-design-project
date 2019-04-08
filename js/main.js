/*
* main js contenente funzioni per il sito
*/

//mostra o nasconde il div con le informazioni sui topic
function hideShow(x) {
    var div = document.getElementById(x);
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
} 



//stile per alert
function functionAlert(msg, myYes) {
    //lo stile del div di alert si trova nel personal.css
    //per essere visibile tutto il contenuto della pagina
    //va incluso in un tag div con id overlay
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    var dialogoverlay = document.getElementById('overlay');
    dialogoverlay.style.display = "block";
    dialogoverlay.style.height = winH+"px";
    var confirmBox = $("#confirm");
    confirmBox.find(".message").text(msg);
    confirmBox.find(".yes").unbind().click(function() {
       confirmBox.hide();
    });
    confirmBox.find(".yes").click(myYes);
    confirmBox.show();
 }

 
 


$(function(){
	//mostra i div dei topic con animazione opacity 
    $(window).scroll(function(){
		if ($(this).scrollTop() > 300) 
		{
			$('.hideme1').css({
                "opacity":"1",
                "transition" : "2s"
            });
            $('.hideme2').css({
                "opacity":"1",
                "transition" : "3s"
            });
            $('.hideme3').css({
                "opacity":"1",
                "transition" : "4s"
            });
		} 
    });
});

$(function(){
    //funzione per spostarsi  nella pagina 
	$('#toTop').click(function(){
		$('html, body').animate({scrollTop : 0},600);
    });

    $('#topics').click(function(){
		var target = $('#sectiontopic');
        if(target.length) {
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
    });
    $('#Facts').click(function(){
		var target = $('#sfondo-graphs');
        if(target.length) {
       
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
    });
    $('#Discover').click(function(){
		var target = $('#sectiondiscover');
        if(target.length) {
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
    });
});
    
$(function(){
    //grafici interattivi
    $("#btn1").click(function(){
        $("#graph1").animate({width: "38%"});
        $("#fact1").fadeIn(2000);
        $("#graph2").animate({width: "80%"});
        $("#fact2").fadeIn(2000);
        $("#graph3").animate({width: "50%"});
        $("#fact3").fadeIn(2000);
    });
    $("#btn2").click(function(){
        $("#graph1").animate({width: "2px"});
        $("#fact1").fadeOut();
        $("#graph2").animate({width: "2px"});
        $("#fact2").fadeOut();
        $("#graph3").animate({width: "2px"});
        $("#fact3").fadeOut();
    });


    $("#childcontainer").click(function(){
        $("#child").toggle(); 
    }); 
    $("#partnercontainer").click(function(){
        $("#partner").toggle(); 
    }); 
    $("#violencecontainer").click(function(){
        $("#violence").toggle(); 
    }); 
    
});


    
	

//fine jquery





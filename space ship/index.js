$(document).ready(function() {
    activeLinkControl();
    desactiveLinkControl();
    techActiveBtnControl();
    crewActiveBtnControl();
    toggler();
    pulsate();
});

function activeLinkControl() {
    $(".navlink").on("click" , function() {
        $(".navlink").removeClass("active");
    
        $(this).addClass("active");
    }); 
}
function desactiveLinkControl() {
    $(".destination-link").on("click" , function() {
        $(".destination-link").removeClass("des-active");
    
        $(this).addClass("des-active");
    }); 
}
function crewActiveBtnControl() {
    $(".btn-sliders i").on("click" , function() {
        $(".btn-sliders i").removeClass("crew-active");
    
        $(this).addClass("crew-active");
        var btnId = this.id;
        if (btnId === "commander") {
            $(".crew-flex").fadeOut();
            $("#crew-flex-1").fadeIn();
        }
        if (btnId === "specialist") {
            $(".crew-flex").fadeOut();
            $("#crew-flex-2").fadeIn();
        }
        if (btnId === "pilot") {
            $(".crew-flex").fadeOut();
            $("#crew-flex-3").fadeIn();
        }
        if (btnId === "engineer") {
            $(".crew-flex").fadeOut();
            $("#crew-flex-4").fadeIn();
        }
    }); 
}
function techActiveBtnControl() {
    $(".tech-numbers p").on("click" , function() {
        $(".tech-numbers p").removeClass("tech-active");

        $(this).addClass("tech-active");
        var techBtnId = this.id;
        if (techBtnId === "1") {
            $(".information").fadeOut();
            $("#info-1").fadeIn();
        }
        if (techBtnId === "2") {
            $(".information").fadeOut();
            $("#info-2").fadeIn().css("display" , "flex");
        }
        if (techBtnId === "3") {
            $(".information").fadeOut();
            $("#info-3").fadeIn().css("display" , "flex");
        }
    });
}
function toggler() {
    $(".fa-bars").click(function() { 
        $(".ul").toggle();
        $(".fa-bars").hide();
    });
}
function pulsate() {
    $("#explorer")
}

$(document).ready(function(){
    /*
    $(".navbar2 #dropbtn").on('mouseover', function(){
        $(".dropdown-content").slideDown('fast');
    });
    $(".navbar2 .dropdown-content").on('mouseover', function(){
        $(".dropdown-content").slideDown('fast');
    });


    $(".navbar2").on('mouseout', function(){
        $(".dropdown-content").slideUp('fast');
    });
    */

    $("#dropbtn, .dropdown-content").hover(function(){
        $(".dropdown-content").toggleClass("show");
    }, function(){
        $(".dropdown-content").toggleClass("show").fadeOut();
    })

    $("#dropbtn2, .dropdown-content2").hover(function(){
        $(".dropdown-content2").toggleClass("show");
    }, function(){
        $(".dropdown-content2").toggleClass("show").fadeOut();
    })

    $("#dropbtn3, .dropdown-content3").hover(function(){
        $(".dropdown-content3").toggleClass("show");
    }, function(){
        $(".dropdown-content3").toggleClass("show").fadeOut();
    })

    $("#dropbtn4, .dropdown-content4").hover(function(){
        $(".dropdown-content4").toggleClass("show");
    }, function(){
        $(".dropdown-content4").toggleClass("show").fadeOut();
    })


    $("#featured").owlCarousel();

}); 
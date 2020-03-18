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


    $("#featured").owlCarousel({
        loop: true,
        margin: 15,
        responsiveClass: true,
        responsive: {
            o:{
                item: 1,
                nav: true
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 4,
                nav: true,
                loop: false
            }
        }
    });

}); 
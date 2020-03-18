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
        margin: 10,
        navContainer: '#customNav',
        dots: true,
        navText: [
        '<i class="fa fa-chevron-left fa-3x" aria-hidden="true"></i>',
        '<i class="fa fa-chevron-right fa-3x" aria-hidden="true"></i>'
        ],
        navContainer: '.content-box #customNav',
        responsiveClass: true,
        responsive: {
            0:{
                items: 1,
                nav: true
            },
            600:{
                items: 2,
                margin: 5,
                nav: true
            },
            1000:{
                items: 4,
                nav: true,
                loop: true
            }
        }

    });

    $("#hero").owlCarousel({
        loop: true,
        margin: 10,
        navContainer: '#customNav2',
        dots: true,
        navText: [
        '<i class="fa fa-chevron-left fa-3x" aria-hidden="true"></i>',
        '<i class="fa fa-chevron-right fa-3x" aria-hidden="true"></i>'
        ],
        navContainer: '.carousel-content-box #customNav2',
        responsiveClass: true,
        responsive: {
            0:{
                items: 1,
                loop: true,
                nav: true
            },
            600:{
                items: 1,
                loop: true,
                nav: true
            },
            1000:{
                items: 1,
                nav: true,
                loop: true
            }
        }
    });
   

}); 
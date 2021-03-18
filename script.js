$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        dots: true,
        dotsEach: true,
        responsiveRefreshRate: 200,
        navContainer: '.owl-arrow-container',
        dotsContainer: '.owl-dots-container',
        checkVisibility: false,
        responsiveBaseWidth: '.slider_row',
        responsiveClass:true,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
        responsive:{
            0:{
                items: 1.5,
                center: true,
            },
            1024:{
                items:3,
            }
        }
    });

    $('.cocoen').cocoen();

  });
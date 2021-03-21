$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        center: true,
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
            },
            576:{
                items: 1.5,
            },
            768:{
                items: 3,
            },
            1024:{
                items:3,
            }
        }
    });

    $('.cocoen').cocoen();
    

    // END LIBS

    $('.nav_btn').click( function(){
        $(this).find('.nav_btn-item').toggleClass('animate-nav-item');
        $('.sidebar').toggleClass('animate-sidebar');
    })

    $('.faq_item').click( function(){
        $(this).find('.faq_img-block').toggleClass('animate-faq_item');
    })

  });
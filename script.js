$(document).ready(function(){


    // OWL SLIDER
    $(".owl-carousel").owlCarousel({
        items: 3,
        // itemsDesktopSmall : [980,9],
        // itemsTablet: [768,5],
        // itemsTabletSmall: false,
        // itemsMobile : [479,4],
        loop: true,
        nav: true,
        navText: ["<div class='owl-prev-arrow'> <div class='arrow-wrap'><img src='./svg/owl-prev-arrow.svg' alt='' class='arrow-left'></div> </div>" , "<div class='owl-next-arrow'>  <div class='arrow-wrap'><img src='./svg/owl-next-arrow.svg' alt='' class='arrow-right'></div></div>" ],
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
            479:{
                items: 1.5,
            },
            576:{
                items: 3,
            },
            768:{
                items: 3,
            },
            1024:{
                items: 3,
            }
        }
    });


    // COCOEN
    $('.cocoen').cocoen();


    // SLICK SLIDER
    $(".team_slider-wrap").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
        prevArrow: '.team_right-leftBlock',
        nextArrow: '.team_right-rightBlock',
        asNavFor: '.team_desc-sliderWrap',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  prevArrow: '.team_right-leftBlock',
                  nextArrow: '.team_right-rightBlock',
                }
              },
            {
              breakpoint: 1920,
              settings: {
                prevArrow: '.team_left-arrowLeft',
                nextArrow: '.team_left-arrowRight',
              }
            },
        ]
    });
    
    $('.team_left-item').click( function(e){
        let dataId = $(this).data('id')
        $('.team_slider-wrap').slick('slickGoTo', dataId);
    });


    $('.team_desc-sliderWrap').slick({
        slidesToShow: 1,
        draggable:false,
        dots: false,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.team_slider-wrap'
    })

    // JQUERY MASK

    $('.phone-mask').mask('+7 (000) 000-00-00');

    // END LIBS

    $('.nav_btn').click( function(){
        $(this).find('.nav_btn-item').toggleClass('animate-nav-item');
        $('.sidebar').toggleClass('animate-sidebar');
    })

    $('.faq_item').click( function(){
        $(this).find('.faq_img-block').toggleClass('animate-faq_item');
    })

    $('.openModal').click( function(e){
        let self = e.target;
        let dataTitle = $(self).data('title');
        let dataDesc = $(self).data('desc');
        let dataBtnText = $(self).data('text');

        $('.modal_title').text(dataTitle);
        $('.modal_desc').text(dataDesc)
        $('.submitBtn').text(dataBtnText)
    })

  });
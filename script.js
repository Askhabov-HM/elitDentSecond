$(document).ready(function(){


    // OWL SLIDER
    $(".owl-carousel").owlCarousel({
        items: 3,
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
        animateOut: 'fadeOutLeft',
        animateIn: 'fadeInLeft"',
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

    //////////////////////////////////////
    //////////// END LIBS
    /////////////////////////////////////

    // CSS ANIMATIONS
    $('.nav_btn').click( function(){
        $(this).find('.nav_btn-item').toggleClass('animate-nav-item');
        $('.sidebar').toggleClass('animate-sidebar');
    })

    $('.faq_item').click( function(){
        $(this).find('.faq_img-block').toggleClass('animate-faq_item');
    })

    // MODALS

    $('.openModal').click( function(e){
        let self = e.target;
        let dataTitle = $(self).data('title');
        let dataDesc = $(self).data('desc');
        let dataBtnText = $(self).data('text');

        $('.modal_title').text(dataTitle);
        $('.modal_desc').text(dataDesc)
        $('.submitBtn').text(dataBtnText)
    })

    // GENERAL FORM SUBMIT

    $('.form-general, .modalForm').submit( function(event){
        event.preventDefault()
        let self = event.target;
        let data = $(self).serialize();
        
        $.get('https://jsonplaceholder.typicode.com/todos/1', data, function(){
            if($('#modal').hasClass('show')){
                // $('.loader').removeClass('d-none')
                // $('.loader').addClass('d-flex');
            }   
        })
        .done( function(response){
            if($('#modal').hasClass('show')){
                console.log(123)
                $('#modal').modal('hide');
                $('#modalSuccess').modal('show');
            }
            console.log(response);
            console.log('done')
        })
        .fail( function(error){
            console.log(error.responseText)
        })
    })

    // TEAM ACTIVE ITEM APPEND STYLES 

    $('.team_left-item').click( function(){
        addRemoveTeamClass(this)
    })

    function addRemoveTeamClass(target){ // target - целевой элемент, к которому добавить .activeTeamItem
        console.log(target)
        $('.team_left-item').each( function(index){ // перебрать все элементы с .team_left-item
            $(this).removeClass('activeTeamItem');  // удалить .activeTeamItem
        })
        $(target).addClass('activeTeamItem'); // присвоить целевому элементу .activeTeamItem
    }

    // SLICK ARROW 
    
    $('.slick-arrow').click( function(){ // при клике на маленькую стрелку слайдера
        let activeSlideIndex = $('.slick-active').data('slick-index'); // получить номер активного из data-slisk-index
        let targetTeamItem = $('.team_left-item').eq(activeSlideIndex); // получить teamItem, который равен активному главному слайду
        addRemoveTeamClass(targetTeamItem) // передать в функцию
    })

    // FAQ COLLAPSE 

    $('.faq_item-link').click(function(e){
        $(this).find('.faq_item-title').toggleClass('faq-active-item')
    })

  });
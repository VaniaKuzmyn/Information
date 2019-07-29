$('.slick').slick({
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        }
      ]
  });
    /* Different speed header slider */
    var $slideshow = $('.slick');
    var ImagePauses = [3000, 1500, 750];
    $('.slick').on('afterChange', function(event, slick, currentSlide) {
      $slideshow.slick('slickSetOption', 'autoplaySpeed', ImagePauses[currentSlide], true);
    });

    /* Menu Activate on load */
    let id;
    let sections = $('.scrollTo');
    for(let i = sections.length - 1; i >= 0 ; i--){
    id = sections.eq(i).attr('id');
    if(window.pageYOffset >= sections.eq(i).offset().top-10
        ){
        $(`.menu-item-just[href="#${id}"]`).addClass('menu-item_active');
        break;
        }         
    }
    
    $(window).scroll(function () {
        /* Menu Activate on scroll */ 
      function addClass () {
        $('.menu-item-just').removeClass('menu-item_active');
        $(`.menu-item-just[href="#${id}"]`).addClass('menu-item_active');
      }
    for(let i = sections.length - 1; i >= 0 ; i--){
      id = sections.eq(i).attr('id');
    
      if(window.pageYOffset >= sections.eq(i).offset().top-30
        && !$(`.menu-item-just[href="#${id}"]`).hasClass('menu-item_active')
        ){
          if( i == sections.length - 1){ // Need for last section
            addClass();
          } else if( window.pageYOffset <= sections.eq(i+1).offset().top-30 ){
            addClass();
          }
          break;
        }         
    }
    
    /* Section About Us Animate skill bar */ 
    if ( window.pageYOffset + window.innerHeight - 150 >= $('.progress-box').offset().top ){
      $('.progress-bar').addClass('bar-active');
    }
    
      /* End Scroll */
    })
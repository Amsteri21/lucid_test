$(document).ready(function() {
  $(".comment__slider").slick({
    autoplay:false,
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows : false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });

  $('.header__toggle').click( function() {
    $(this).toggleClass('active');
    $('.header__nav').toggleClass('active');
    $('body').toggleClass('open-menu')
  });

});
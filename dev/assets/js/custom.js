const burger = document.querySelector('#hamburger');

burger.addEventListener('click', function(){
    burger.classList.toggle('is-active')
})





$(document).ready(function() {
  $(".first-screen").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: '.first-screen-nav',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false
        }
      }
    ]
  });
  $('.first-screen').append($('.first-screen-nav'));


  mobileOnlySlider("#advanages-slider", true, false, 991);

  function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
    var slider = $($slidername);
    var settings = {
      mobileFirst: true,
      dots: $dots,
      arrows: $arrows,
      responsive: [
        {
          breakpoint: $breakpoint,
          settings: "unslick"
        }
      ]
    };

    slider.slick(settings);

    $(window).on("resize", function () {
      if ($(window).width() > $breakpoint) {
        return;
      }
      if (!slider.hasClass("slick-initialized")) {
        return slider.slick(settings);
      }
    });
  } 
  });


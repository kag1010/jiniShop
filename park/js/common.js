$(function () {


  $(".header-1__item, .header-2__list").mouseover(function () {
    $(".header__inner").addClass("on");
    $(this).children('.header-1__link').addClass("on");
    $(this).children('.header-2__list').addClass("on");

    if ($(".header-2__list").hasClass("on")) {
      $(this).parents().children(".header-1__link").addClass("on");
      $(".dim").addClass("on");
    } else {
      $(this).parents().children(".header-1__link").removeClass("on");
      $(".dim").removeClass("on");
    }
  });

  $(".header-1__item, .header-2__list").mouseleave(function () {
    $(".header__inner").removeClass("on");
    $(this).children('.header-1__link').removeClass("on");
    $(this).children('.header-2__list').removeClass("on");
    $(".dim").removeClass("on");
  });


  // 메인 슬라이드
  var swiper = new Swiper('.swiper1', {
    // direction: 'vertical',
    // speed : 3000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    loop: true,
    on: {
      slideChangeTransitionStart: function () {
        $('.swiper_progress-wrap').hide(0);
        $('.swiper_progress-wrap').removeClass('on');
      },
      slideChangeTransitionEnd: function () {
        $('.swiper_progress-wrap').show(0);
        $('.swiper_progress-wrap').addClass('on');
      },
    }
  });

}())

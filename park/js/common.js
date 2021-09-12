$(function () {

  //스크롤시 navbar 디자인 변경, 퀵메뉴 나타남
  $('.header__inner').each(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 40) {
        $('.header__inner').addClass("sticky");
        $('.quick-menu').addClass("on");
      } else {
        $('.header__inner').removeClass("sticky");
        $('.quick-menu').removeClass("on");
      }
    })
  })
  $(window).trigger('scroll');

  // top 클릭시 스크롤 이동
  $(".top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

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
  // var swiper = new Swiper('.swiper1', {
  //   // direction: 'vertical',
  //   // speed : 3000,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false
  //   },
  //   loop: true,
  //   on: {
  //     slideChangeTransitionStart: function () {
  //       $('.swiper_progress-wrap').hide(0);
  //       $('.swiper_progress-wrap').removeClass('on');
  //     },
  //     slideChangeTransitionEnd: function () {
  //       $('.swiper_progress-wrap').show(0);
  //       $('.swiper_progress-wrap').addClass('on');
  //     },
  //   }
  // });

  var mySwiper = new Swiper('.swiper1', {
    // Optional parameters
    loop: true,
    autoplayDisableOnInteraction: false,
    slidesPerView: 1,
    autoHeight: true,
    autoplay: {
      delay: 3000,//animation과 시간 맞춰줘야함
      disableOnInteraction: false
    },

    pagination: {
      el: '.swiper-pagination.main',
      clickable: 'true',
      type: 'bullets',
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '<i></i>' + '<b></b>' + '</span>';
      },

    },
    navigation: {
      nextEl: '.swiper-button-next.main',
      prevEl: '.swiper-button-prev.main',
    },

  })

  // WHAT'S NEW
  var swiper = new Swiper('.swiper2', {
    loop: true,
    loopFillGroupWithBlank: true,
    slidesPerView: 3,
    spaceBetween: 90,
    slidesPerGroup: 3,
    pagination: {
      el: '.swiper-pagination.sl2',
      clickable: true,
    },
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
  });

  // RECOMMEND GIFT
  var swiper = new Swiper('.swiper3', {
    loop: true,
    loopFillGroupWithBlank: true,
    slidesPerView: 3,
    spaceBetween: 90,
    slidesPerGroup: 3,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: '.swiper-pagination.sl4',
      clickable: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });

  swiper.on('transitionEnd', function () {
    console.log('now index :::', swiper.realIndex);

    if (swiper.realIndex == 0 || swiper.realIndex == 3) {
      $('.swiper-p.list-com li.bag').addClass('on');
      $('.swiper-p.list-com li.w-w').removeClass("on");
      $('.swiper-p.list-com li.m-w').removeClass("on");
    } else if (swiper.realIndex == 6 || swiper.realIndex == 9) {
      $('.swiper-p.list-com li.w-w').addClass('on');
      $('.swiper-p.list-com li.bag').removeClass("on");
      $('.swiper-p.list-com li.m-w').removeClass("on");
    } else if (swiper.realIndex == 12 || swiper.realIndex == 15) {
      $('.swiper-p.list-com li.m-w').addClass('on');
      $('.swiper-p.list-com li.bag').removeClass("on");
      $('.swiper-p.list-com li.w-w').removeClass("on");
    } else {
      $('.swiper-p.list-com li').removeClass("on");
    }
  });

  $('.swiper-p.list-com li.bag').click(function () {
    swiper.slideTo(3, 300, false);
  });
  $('.swiper-p.list-com li.w-w').click(function () {
    swiper.slideTo(9, 300, false);
  });
  $('.swiper-p.list-com li.m-w').click(function () {
    swiper.slideTo(15, 300, false);
  });

  // 중간 슬라이드
  var mySwiper = new Swiper('.swiper5', {
    // Optional parameters
    loop: true,
    autoplayDisableOnInteraction: false,
    slidesPerView: 1,
    autoHeight: true,
    autoplay: {
      delay: 3000,//animation과 시간 맞춰줘야함
      disableOnInteraction: false
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
      type: 'bullets',
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '<i></i>' + '<b></b>' + '</span>';
      },

    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  })

  // CONSUMER BEST
  var mswiper = new Swiper('.swiper4', {
    loop: true,
    loopFillGroupWithBlank: true,
    slidesPerView: 3,
    spaceBetween: 90,
    slidesPerGroup: 3,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: '.swiper-pagination.sl5',
      clickable: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });

  mswiper.on('transitionEnd', function () {
    console.log('now index2 :::', mswiper.realIndex);

    if (mswiper.realIndex == 0 || mswiper.realIndex == 3) {
      $('.swiper-p2.list-com li.bag').addClass('on');
      $('.swiper-p2.list-com li.w-w').removeClass("on");
      $('.swiper-p2.list-com li.m-w').removeClass("on");
    } else if (mswiper.realIndex == 6 || mswiper.realIndex == 9) {
      $('.swiper-p2.list-com li.w-w').addClass('on');
      $('.swiper-p2.list-com li.bag').removeClass("on");
      $('.swiper-p2.list-com li.m-w').removeClass("on");
    } else if (mswiper.realIndex == 12 || mswiper.realIndex == 15) {
      $('.swiper-p2.list-com li.m-w').addClass('on');
      $('.swiper-p2.list-com li.bag').removeClass("on");
      $('.swiper-p2.list-com li.w-w').removeClass("on");
    } else {
      $('.swiper-p2.list-com li').removeClass("on");
    }
  });

  $('.swiper-p2.list-com li.bag').click(function () {
    mswiper.slideTo(3, 300, false);
  });
  $('.swiper-p2.list-com li.w-w').click(function () {
    mswiper.slideTo(9, 300, false);
  });
  $('.swiper-p2.list-com li.m-w').click(function () {
    mswiper.slideTo(15, 300, false);
  });

}())

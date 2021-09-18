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

  var mySwiper = new Swiper('.swiper1', {
    // Optional parameters
    loop: true,
    observer: true,
    observeParents: true,
    autoplayDisableOnInteraction: false,
    slidesPerView: 1,
    autoHeight: true,
    // autoplay: {
    //   delay: 3000,//animation과 시간 맞춰줘야함
    //   disableOnInteraction: false
    // },
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
    observer: true,
    observeParents: true,
    loopFillGroupWithBlank: true,
    slidesPerGroup: 3,
    pagination: {
      el: '.swiper-pagination.sl2',
      clickable: true,
    },
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    breakpointsInverse: true,
    breakpoints: {
      //  px 보다 클 경우
      900: {
        slidesPerView: 3,
        spaceBetween: 90,
        slidesPerGroup: 3,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1
      }
    }
  });

  // RECOMMEND GIFT
  var swiper = new Swiper('.swiper3', {
    loop: true,
    observer: true,
    observeParents: true,
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

    breakpointsInverse: true,
    breakpoints: {
      //  px 보다 클 경우
      900: {
        slidesPerView: 3,
        spaceBetween: 90,
        slidesPerGroup: 3,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1
      }
    }
  });

  // 창 크기에 따라
  $(window).resize(function () {
    if ($(window).width() > 768) {
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
    }
  });

  // 창 크기에 따라
  $(window).resize(function () {
    if ($(window).width() < 768) {
      swiper.on('transitionEnd', function () {
        console.log('now index :::', swiper.realIndex);

        if (swiper.realIndex == 0 || swiper.realIndex == 1 || swiper.realIndex == 2 || swiper.realIndex == 3 || swiper.realIndex == 4 || swiper.realIndex == 5) {
          $('.swiper-p.list-com li.bag').addClass('on');
          $('.swiper-p.list-com li.w-w').removeClass("on");
          $('.swiper-p.list-com li.m-w').removeClass("on");
        } else if (swiper.realIndex == 6 || swiper.realIndex == 7 || swiper.realIndex == 8 || swiper.realIndex == 9 || swiper.realIndex == 10 || swiper.realIndex == 11) {
          $('.swiper-p.list-com li.w-w').addClass('on');
          $('.swiper-p.list-com li.bag').removeClass("on");
          $('.swiper-p.list-com li.m-w').removeClass("on");
        } else if (swiper.realIndex == 12 || swiper.realIndex == 13 || swiper.realIndex == 14 || swiper.realIndex == 15 || swiper.realIndex == 16 || swiper.realIndex == 17) {
          $('.swiper-p.list-com li.m-w').addClass('on');
          $('.swiper-p.list-com li.bag').removeClass("on");
          $('.swiper-p.list-com li.w-w').removeClass("on");
        } else {
          $('.swiper-p.list-com li').removeClass("on");
        }
      });

      $('.swiper-p.list-com li.bag').click(function () {
        swiper.slideTo(1, 300, false);
      });
      $('.swiper-p.list-com li.w-w').click(function () {
        swiper.slideTo(7, 300, false);
      });
      $('.swiper-p.list-com li.m-w').click(function () {
        swiper.slideTo(13, 300, false);
      });
    }
  });

  // 중간 슬라이드
  var mySwiper = new Swiper('.swiper5', {
    loop: true,
    observer: true,
    observeParents: true,
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
    observer: true,
    observeParents: true,
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
    breakpointsInverse: true,
    breakpoints: {
      //  px 보다 클 경우
      900: {
        slidesPerView: 3,
        spaceBetween: 90,
        slidesPerGroup: 3,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1
      }
    }
  });

  // 창 크기에 따라
  $(window).resize(function () {
    if ($(window).width() > 768) {
      mswiper.on('transitionEnd', function () {
        console.log('now index :::', mswiper.realIndex);

        if (mswiper.realIndex == 0 || mswiper.realIndex == 3) {
          $('.swiper-p.list-com li.bag').addClass('on');
          $('.swiper-p.list-com li.w-w').removeClass("on");
          $('.swiper-p.list-com li.m-w').removeClass("on");
        } else if (mswiper.realIndex == 6 || mswiper.realIndex == 9) {
          $('.swiper-p.list-com li.w-w').addClass('on');
          $('.swiper-p.list-com li.bag').removeClass("on");
          $('.swiper-p.list-com li.m-w').removeClass("on");
        } else if (mswiper.realIndex == 12 || mswiper.realIndex == 15) {
          $('.swiper-p.list-com li.m-w').addClass('on');
          $('.swiper-p.list-com li.bag').removeClass("on");
          $('.swiper-p.list-com li.w-w').removeClass("on");
        } else {
          $('.swiper-p.list-com li').removeClass("on");
        }
      });

      $('.swiper-p.list-com li.bag').click(function () {
        mswiper.slideTo(3, 300, false);
      });
      $('.swiper-p.list-com li.w-w').click(function () {
        mswiper.slideTo(9, 300, false);
      });
      $('.swiper-p.list-com li.m-w').click(function () {
        mswiper.slideTo(15, 300, false);
      });
    }
  });

  // 창 크기에 따라
  $(window).resize(function () {
    if ($(window).width() < 768) {
      mswiper.on('transitionEnd', function () {
        console.log('now index :::', mswiper.realIndex);

        if (mswiper.realIndex == 0 || mswiper.realIndex == 1 || mswiper.realIndex == 2 || mswiper.realIndex == 3 || mswiper.realIndex == 4 || mswiper.realIndex == 5) {
          $('.swiper-p.list-com li.bag').addClass('on');
          $('.swiper-p.list-com li.w-w').removeClass("on");
          $('.swiper-p.list-com li.m-w').removeClass("on");
        } else if (mswiper.realIndex == 6 || mswiper.realIndex == 7 || mswiper.realIndex == 8 || mswiper.realIndex == 9 || mswiper.realIndex == 10 || mswiper.realIndex == 11) {
          $('.swiper-p.list-com li.w-w').addClass('on');
          $('.swiper-p.list-com li.bag').removeClass("on");
          $('.swiper-p.list-com li.m-w').removeClass("on");
        } else if (mswiper.realIndex == 12 || mswiper.realIndex == 13 || mswiper.realIndex == 14 || mswiper.realIndex == 15 || mswiper.realIndex == 16 || mswiper.realIndex == 17) {
          $('.swiper-p.list-com li.m-w').addClass('on');
          $('.swiper-p.list-com li.bag').removeClass("on");
          $('.swiper-p.list-com li.w-w').removeClass("on");
        } else {
          $('.swiper-p.list-com li').removeClass("on");
        }
      });

      $('.swiper-p.list-com li.bag').click(function () {
        mswiper.slideTo(1, 300, false);
      });
      $('.swiper-p.list-com li.w-w').click(function () {
        mswiper.slideTo(7, 300, false);
      });
      $('.swiper-p.list-com li.m-w').click(function () {
        mswiper.slideTo(13, 300, false);
      });
    }
  });

  // 모바일 메뉴
  $(window).load(function () {
    $(".menu-open").click(function () {
      $(".header__inner, .panel-left, .dim").toggleClass("on");

      if ($(".dim").hasClass("on")) {
        $(".dim").fadeIn();
        $('html, body').addClass('hidden');
      } else {
        $(".dim").fadeOut();
        $('html, body').removeClass('hidden');
      }
    });

    $(".menu-close").click(function () {
      $(".header__inner, .panel-left, .dim").removeClass("on");
      $('html, body').removeClass('hidden');
    });

    $(".panel-link.panel3-open").click(function () {
      $(this).parents().children(".panel2-list").toggleClass("on");
      $(this).parents().children('.panel3-open').toggleClass('on');
      e.preventDefault();
    });

    $(window).resize(function () {
      if ($(window).width() > 768) {
        $(".header__inner, .panel-left, .dim").removeClass("on");
        $('html, body').removeClass('hidden');
      }
    });
  });

}())

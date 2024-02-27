window.addEventListener("DOMContentLoaded", () => {
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  const someFunc = (instance) => {
    if (instance) {
      instance.on("slideChange", function (e) {
        console.log("*** mySwiper.activeIndex", instance.activeIndex);
      });
    }
  };

  resizableSwiper("(max-width: 1280px)", ".slider-1", {
    loop: false,
    spaceBetween: 1,
    slidesPerView: 2,
    freeMode: true,
    breakpoints: {
      1280: {
        slidesPerView: 6,
        spaceBetween: 8,
      },
      976: {
        slidesPerView: 3.5,
        spaceBetween: 8,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 8,
      },
      480: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
    },
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
  });
});

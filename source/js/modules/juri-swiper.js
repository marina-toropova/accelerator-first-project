import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';


const swiper = new Swiper('.jury__swiper', {

  direction: 'horizontal',
  loop: true,

  // Navigation arrows

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      initialSlide: 1,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 40,
      initialSlide: 3,
      controller: {
        inverse: true,
      },
    },

    1366: {
      initialSlide: 3,
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});

const jurySwiper = document.querySelector('.jury__swiper').swiper;

export { swiper, jurySwiper };

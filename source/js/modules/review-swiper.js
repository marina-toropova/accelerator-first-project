import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';


const swiper = new Swiper('.reviews__swiper', {

  direction: 'horizontal',

  // Navigation arrows

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 50,
    },

    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    1366: {
      slidesPerView: 1,
      spaceBetween: 40
    }
  },
});

const reviewsSwiper = document.querySelector('.reviews__swiper').swiper;

export { swiper, reviewsSwiper };

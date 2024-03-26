import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

/* import {Navigation, Pagination} from "swiper/modules"; */
// import 'swiper/css';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  /*   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, */

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 40,
      initialSlide: 4,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },

    1366: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});

const jurySwiper = document.querySelector('.swiper').swiper;

export { swiper, jurySwiper };

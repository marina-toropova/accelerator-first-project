import { setupVideo } from './modules/video.js';
import { priceTabs } from './modules/price-tabs.js';
import { setPriceShadow } from './modules/price-shadows.js';
import { jurySwiper } from './modules/juri-swiper.js';
import { faqTabs } from './modules/faq-tabs.js';
import { playAccordionFaq } from './modules/accordion.js';
import { reviewsSwiper } from './modules/review-swiper.js';
import { validateNameField, validatePhoneField, showError } from './modules/form.js';

setupVideo();

document.addEventListener('DOMContentLoaded', () => {
  priceTabs();
  faqTabs();
  playAccordionFaq();
  reviewsSwiper.init();
});

setPriceShadow();
jurySwiper.slideNext();
validateNameField();
validatePhoneField();



const phoneInputField = document.querySelector('#phone');
const formContainer = document.querySelector('.form');
const form = formContainer.querySelector('form');


form.addEventListener('submit', (event) => {
  // Если поле email валдно, позволяем форме отправляться

  if (!phoneInputField.validity.valid) {
    // Если поле email не валидно, отображаем соответствующее сообщение об ошибке
    showError();
    // Затем предотвращаем стандартное событие отправки формы
    event.preventDefault();
  }
});

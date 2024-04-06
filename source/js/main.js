import { setupVideo } from './modules/video.js';
import { priceTabs } from './modules/price-tabs.js';
import { setPriceShadow } from './modules/price-shadows.js';
import { jurySwiper } from './modules/juri-swiper.js';
import { faqTabs } from './modules/faq-tabs.js';
import { playAccordionFaq } from './modules/accordion.js';
import { reviewsSwiper } from './modules/review-swiper.js';
import { validateNameField, validatePhoneField, validateForm } from './modules/form.js';

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
validateForm();

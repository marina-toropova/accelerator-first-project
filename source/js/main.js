// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import { setupVideo } from './modules/video.js';
import { tabs } from './modules/tabs.js';
import { setPriceShadow } from './modules/price-shadows.js';
import { jurySwiper } from './modules/juri-swiper.js';

setupVideo();

document.addEventListener('DOMContentLoaded', () => {
  tabs();
});

setPriceShadow();

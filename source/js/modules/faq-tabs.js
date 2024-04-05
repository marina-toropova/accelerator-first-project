import { bindTabs } from './util';

const faqTabs = () => {
  bindTabs('faq__item', 'faq__info-wrapper', 'active', '[data-tab="tab-4"]', '#tab-4');
};

export { faqTabs };

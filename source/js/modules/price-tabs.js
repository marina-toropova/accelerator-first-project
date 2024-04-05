import { bindTabs } from './util';

const priceTabs = () => {
  bindTabs('price__item', 'price__card-wrapper', 'active', '[data-tab="tab-1"]', '#tab-1');
};

export { priceTabs };

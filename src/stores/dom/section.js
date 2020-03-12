import localStore from '../../lib/localStore.js';

export const sections = localStore.create('sections', new Object());
export const sectionOrder = localStore.create('sectionOrder', []);

sections.useLocalStorage();
sectionOrder.useLocalStorage();

function empty() {
  return {
    isTitle: false,
    type: 'normal',
    wrap: 'wrapped',
    align: 'center',
    columns: 1,
    backgroundUrl: '',
    backgroundColor: '#dfdfdf'
  };
}

export default {
  empty
}

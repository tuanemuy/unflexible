import localStore from '../lib/localStore.js';
export const ogps = localStore.create('ogps', new Object());

ogps.useLocalStorage();

function empty() {
  return {
    property: '',
    content: ''
  };
}

export default {
  empty
}

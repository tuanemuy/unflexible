import localStore from '../lib/localStore.js';
export const head = localStore.create('head', new Object());

head.useLocalStorage();

function empty() {
  return {
    title: '',
    favicon: '',
    icon: ''
  }
}

export default {
  empty
}

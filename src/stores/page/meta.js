import localStore from '../lib/localStore.js';
export const metas = localStore.create('metas', new Object());

metas.useLocalStorage();

function empty() {
  return {
    name: '',
    content: ''
  };
}

export default {
  empty
}

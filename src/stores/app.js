import localStore from '../lib/localStore.js';

export const editingId = localStore.create('editingId', null);

editingId.useLocalStorage();

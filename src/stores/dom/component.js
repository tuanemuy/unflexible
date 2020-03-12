import localStore from '../../lib/localStore.js';

export const components = localStore.create('components', new Object());
export const componentOrder = localStore.create('componentOrder', []);
// Orderは次のIdを決定するためにたぶん必要

components.useLocalStorage();
componentOrder.useLocalStorage();

function empty() {
  return {
    templateUrl: ''
  };
}

export default {
  empty
}

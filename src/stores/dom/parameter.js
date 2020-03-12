import localStore from '../../lib/localStore.js';

export const parameters = localStore.create('parameters', new Object());
export const parameterOrder = localStore.create('parameterOrder', []);
// Orderは次のIdを決定するためにたぶん必要

parameters.useLocalStorage();
parameterOrder.useLocalStorage();

function empty() {
  return {};
}

export default {
  empty
}

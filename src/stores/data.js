import localStore from '../lib/localStore.js';
import Types from '../lib/types.js';

export const page = localStore.create('page', [Types.page()]);
export const metas = localStore.create('metas', [])

export const sections = localStore.create('sections', new Object());
export const components = localStore.create('components', new Object());
export const params = localStore.create('params', new Object());

export const sectionOrder = localStore.create('sectionOrder', []);
export const componentOrder = localStore.create('componentOrder', []);
export const paramOrder = localStore.create('paramOrder', []);

export const lastSectionId = localStore.create('lastSectionId', getLastSectionId());
export const lastComponentId = localStore.create('lastComponentId', getLastComponentId());
export const lastParamId = localStore.create('lastParamId', getLastParamId());

export const headingsSections = localStore.create('headingsSections', []);
export const componentsSections = localStore.create('componentsSections', []);
export const paramsComponents = localStore.create('paramsComponents', []);

page.useLocalStorage();
metas.useLocalStorage();

sections.useLocalStorage();
components.useLocalStorage();
params.useLocalStorage();

sectionOrder.useLocalStorage();
componentOrder.useLocalStorage();
paramOrder.useLocalStorage();

lastSectionId.useLocalStorage();
lastComponentId.useLocalStorage();
lastParamId.useLocalStorage();

headingsSections.useLocalStorage();
componentsSections.useLocalStorage();
paramsComponents.useLocalStorage();

function syncRelations(name, list, relationsStore) {
  relationsStore.update(value => value.filter(v => list[v[name + 'Id']]));
}

function syncListOrder(listStore, list, orderStore, order, lastIdStore, lastId) {
  if(Object.keys(list).length < 0) {
    listStore.set(new Object());
    orderStore.set([]);
    lastIdStore.set(0);
    return false;
  }

  if(!Array.isArray(order) || order.length !== Object.keys(list).length) {
    let newOrder = [];
    for(let key of Object.keys(list)) {
      newOrder.push(parseInt(key.split('_')[1]));
    }
    orderStore.set(newOrder);
    lastIdStore.set(Math.max(newOrder));
    return false;
  }

  const trimmed = order.filter(o => list['id_' + o]);
  if(order.length != trimmed.length) {
    orderStore.set(trimmed);
    lastIdStore.set(Math.max(trimmed));
    return false;
  }
  return true;
}

function syncSections(list, order) {
  if(Object.keys(list).length < 0) {
    sections.set(new Object());
    sectionOrder.set([]);
    lastId.set(0);
    return false;
  }

  if(!Array.isArray(order) || order.length !== Object.keys(list).length) {
    let order = [];
    for(let key of Object.keys(list)) {
      order.push(parseInt(key.split('_')[1]));
    }
    sectionOrder.set(order);
    lastId.set(getLastId());
    return false;
  }

  const trimmed = order.filter(o => list['section_' + o]);
  if(order.length != trimmed.length) {
    sectionOrder.set(trimmed);
    lastId.set(getLastId());
    return false;
  }
  return true;
}

function addList(listStore, orderStore, lastIdStore, lastId, initValue) {
  const id = 'id_' + (parseInt(lastId) + 1);
  listStore.update(s => {
      s[id] = initValue;
      return s;
  });
  orderStore.update(o => [...o, parseInt(lastId) + 1])
  lastIdStore.update(i => parseInt(i) + 1);
  return id;
}

function removeList(listStore, orderStore, id) {
  listStore.update(s => {
    delete s[id];
    return s;
  });
  orderStore.update(o => o.filter(v => v !== id));
}

function getLastSectionId() {
  if(!process.browser) return 0;
  const json = localStorage.getItem('sectionOrder');
  if(json) {
    const sectionOrder = (0, eval)('(' + json + ')');
    if(sectionOrder.length > 0) return Math.max(...sectionOrder);
  }
  return 0;
}

function getLastComponentId() {
  if(!process.browser) return 0;
  const json = localStorage.getItem('componentOrder');
  if(json) {
    const componentOrder = (0, eval)('(' + json + ')');
    if(componentOrder.length > 0) return Math.max(...componentOrder);
  }
  return 0;
}

function getLastParamId() {
  if(!process.browser) return 0;
  const json = localStorage.getItem('paramOrder');
  if(json) {
    const paramOrder = (0, eval)('(' + json + ')');
    if(paramOrder.length > 0) return Math.max(...paramOrder);
  }
  return 0;
}

export default {
  syncListOrder,
  syncRelations,
  addList,
  removeList
}

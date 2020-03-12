import localStore from '../../lib/localStore.js';
export const componentsSections = localStore.create('componentsSections', []);
componentsSections.useLocalStorage();

function generate({ componentId, sectionId }) {
  return {
    componentId: componentId,
    sectionId: sectionId
  };
}

export default {
  generate
}

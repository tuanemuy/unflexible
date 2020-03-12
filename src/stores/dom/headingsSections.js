import localStore from '../../lib/localStore.js';
export const headingsSections = localStore.create('headingsSections', []);
headingsSections.useLocalStorage();

function generate({ headingId, sectionId }) {
  return {
    headingId,
    sectionId
  };
}

export default {
  generate
}

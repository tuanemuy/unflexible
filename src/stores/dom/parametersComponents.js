import localStore from '../../lib/localStore.js';
export const parametersComponents = localStore.create('parametersComponents', []);
parametersComponents.useLocalStorage();

function generate({ parameterId, componentId }) {
  return {
    parameterId: parameterId,
    componentId: componentId
  };
}

export default {
  generate
}

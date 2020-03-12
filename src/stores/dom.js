import Section, { sections, sectionOrder } from './dom/section.js';
import Component, { components, componentOrder } from './dom/component.js';
import Parameter, { parameters, parameterOrder } from './dom/parameter.js';
import ComponentsSections, { componentsSections } from './dom/componentsSections.js';
import HeadingsSections, { headingsSections } from './dom/headingsSections.js';
import ParametersComponents, { parametersComponents } from './dom/parametersComponents.js';

export function resetAll() {
  sections.set(new Object());
  sectionOrder.set([]);
  components.set(new Object());
  componentOrder.set([]);
  parameters.set(new Object());
  parameterOrder.set([]);
  componentsSections.set([]);
  headingsSections.set([]);
  parametersComponents.set([]);
}

export function getSection(id, sectionList) {
  return sectionList[id];
}

export function createSection(orderList) {
  const order = orderList.length < 1 ? 1 : Math.max(...orderList) + 1;
  const id = 'id_' + order;
  sections.update(s => {
    s[id] = Section.empty();
    return s;
  })
  sectionOrder.update(o => [...o, parseInt(order)]);
  return id;
}

export function deleteSection(id, componentsSectionsList) {
  sections.update(s => {
    delete s[id];
    return s;
  });
  sectionOrder.update(o => o.filter(v => v !== id));

  const componentIds = componentsSectionsList
      .filter(r => r.sectionId === id)
      .map(r => r.componentId);
  for(const componentId of componentIds) deleteComponent(componentId);

  componentsSections.update(r => r.filter(v => v.sectionId !== id));
}

export function getComponent(id, componentList) {
  return componentList[id];
}

export function createComponent(sectionId, componentOrderList) {
  const order = componentOrderList.length < 1 ? 1 : Math.max(...componentOrderList) + 1;
  const id = 'id_' + order;
  components.update(c => {
    c[id] = Component.empty();
    return c;
  })
  componentOrder.update(o => [...o, parseInt(order)]);
  componentsSections.update(r => {
    return [...r, ComponentsSections.generate({
        componentId: id,
        sectionId, sectionId
      })];
  });
  return id;
}

export function deleteComponent(id, parametersComponentsList) {
  components.update(c => {
    delete c[id];
    return c;
  });
  componentOrder.update(o => o.filter(v => v !== id));

  const parameterIds = $parametersComponents
      .filter(r => r.componentId === id)
      .map(r => r.parameterId);
  for(const parameterId of parameterIds) deleteParameter(parameterId);

  paramsComponents.update(r => r.filter(v => v.componentId !== id));
  componentsSections.update(r => r.filter(v => v.componentId !== id));
}

export function getHeading(id, componentList) {
  return componentList[id];
}

export function createHeading(sectionId, componentOrderList) {
  const order = componentOrderList.length < 1 ? 1 : Math.max(...componentOrderList) + 1;
  const id = 'id_' + order;
  components.update(c => {
    c[id] = Component.empty();
    return c;
  })
  componentOrder.update(o => [...o, parseInt(order)]);
  headingsSections.update(r => {
    return [...r, HeadingsSections.generate({
        headingId: id,
        sectionId
      })];
  });
  return id;
}

export function deleteHeading(id, parametersComponentsList) {
  components.update(c => {
    delete c[id];
    return c;
  });
  componentOrder.update(o => o.filter(v => v !== id));

  const parameterIds = parametersComponentsList
      .filter(r => r.componentId === id)
      .map(r => r.parameterId);
  for(const parameterId of parameterIds) deleteParameter(parameterId);

  paramsComponents.update(r => r.filter(v => v.componentId !== id));
  headingsSections.update(r => r.filter(v => v.headingId !== id));
}

export function getParameter(id, parameterList) {
  return parameterList[id];
}

export function createParameter(componentId, parameterOrderList) {
  const order = parameterOrderList.length < 1 ? 1 : Math.max(...parameterOrderList) + 1;
  const id = 'id_' + order;
  parameters.update(p => {
    p[id] = Parameter.empty();
    return p;
  })
  parameterOrder.update(o => [...o, parseInt(order)]);
  parametersComponents.update(r => {
    return [...r, ParametersComponents.generate({
        parameterId: id,
        componentId: componentId,
      })];
  });
  return id;
}

export function deleteParameter(id) {
  parameters.update(p => {
    delete p[id];
    return p;
  });
  parameterOrder.update(o => o.filter(v => v !== id));
  paramsComponents.update(r => r.filter(v => v.parameterId !== id));
}

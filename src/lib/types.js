function page() {
  return {
    title: '',
    favicon: '',
    icon: ''
  }
}

function section() {
  return {
    isTitle: false,
    type: 'normal',
    wrap: 'wrapped',
    align: 'center',
    columns: 1,
    backgroundUrl: '',
    backgroundColor: '#dfdfdf'
  };
}

function component(sectionId) {
  return {
    templateUrl: ''
  };
}

function relation(aName, aId, bName, bId) {
  const relation = {};
  relation[aName + 'Id'] = aId;
  relation[bName + 'Id'] = bId;
  return relation;
}

function meta () {
  return {
    name: '',
    property: '',
    content: ''
  };
}

export default {
  page,
  meta,
  section,
  component,
  relation
}

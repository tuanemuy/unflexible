async function template(url) {
  if(!process.browser) return reject();
  const res = await fetch(url);
  return res.json();
}

async function forms(url) {
  const t = await template(url).catch(() => ({ name: '', html: '' }));
  const match = t.html.match(/{{[^{}]*}}/g);

  if(!match) return [];

  let forms = [];
  for(const m of match) {
    const [result, field] = toField(m);
    if(result && !forms.find(f => f.fieldSlug === field.fieldSlug)) {
      forms.push(field);
    };
  }

  return forms;
}

async function instantiate(id, url, params) {
  const t = await template(url).catch(() => ({ name: '', html: '' }));
  return inject([t.name, id].join('_'), t.name, t.html, params);
}

function inject(id, name, html, params) {
  let res = injectId(html, id);
  res = injectClass(res, name);
  return injectParams(res, params);
}

function injectId(html, id) {
  return html.replace(/{{id}}/g, id);
}

function injectClass(html, name) {
  return html.replace(/{{class}}/g, name);
}

function injectParams(html, params) {
  return html.replace(/{{[^{}]*}}/g, match => toParam(match, params));
}

function toParam(match, params) {
  const [result, field] = toField(match);

  if(!result) return match;
  return params[field.fieldSlug] || field.defaultValue;
}

function toField(match) {
  const matches =
      match
      .replace(/[ |{|}]/g, '')
      .match(/^([^:=]+):([a-z]+\w*):([^:=]+)=([^:=]+)$/)

  const fields = matches ? matches.filter(m => m) : [];
  if(fields.length == 5) {
    return [true, {
      fieldName: fields[1],
      fieldSlug: fields[2],
      fieldType: fields[3],
      defaultValue: fields[4]
    }];
  } else {
    return [false, {}];
  }
}

export default {
  template,
  instantiate,
  forms
}

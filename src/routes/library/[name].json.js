import components from './_components.js';

const lookup = new Map();
components.forEach(component => {
  lookup.set(component.name, JSON.stringify(component));
});

export function get(req, res, next) {
  const { name } = req.params;
  if (lookup.has(name)) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(lookup.get(name));
  }
}

import mock from './_mock.js'

const data = JSON.stringify(mock);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(data);
}

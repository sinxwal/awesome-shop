'use strict';

const routes = (server) => [{
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return h.file('dist/client/index.html')
  },
}, {
  method: 'GET',
  path: '/bundle.js',
  handler: (request, h) => {
    return h.file('dist/client/bundle.js')
  },
}, {
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: 'client/public'
    }
  }
}];

module.exports = routes;

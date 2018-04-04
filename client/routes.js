'use strict';

const routes = (server) => [{
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return h.file('dist/index.html')
  },
}, {
  method: 'GET',
  path: '/bundle.js',
  handler: (request, h) => {
    return h.file('dist/bundle.js')
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

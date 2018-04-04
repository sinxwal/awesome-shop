'use strict';

const routes = (server) => [{
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return h.file('client/public/index.html')
  },
}, {
  method: 'GET',
  path: '/bundle.js',
  handler: (request, h) => {
    return h.file('client/build/bundle.js')
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

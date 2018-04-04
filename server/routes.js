'use strict';

const routes = (server) => [{
  method: 'GET',
  path: '/api',
  handler: (request, h) => {
    return "api";
  }
}];

module.exports = routes;

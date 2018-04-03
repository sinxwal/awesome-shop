'use strict'

const Hapi = require('hapi'),
    routes = require('./server/routes')

const server = Hapi.server({
  host: '0.0.0.0',
  port: process.env.PORT || 7000,
})

// Adding client route
server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return h.file('client/index.html')
  },
})

// Adding server routes
server.route(routes(server))

// Bootstrap application
const init = async () => {
  await server.register([
    require('inert'),
    {
      plugin: require('hapi-pino'),
      options: {
        prettyPrint: false,
        logEvents: ['response'],
      },
    },
  ])

  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

init()

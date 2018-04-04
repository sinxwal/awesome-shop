'use strict'

const Hapi = require('hapi')
const serverRoutes = require('./server/routes')
const clientRoutes = require('./client/routes')

const server = Hapi.server({
  host: '0.0.0.0',
  port: process.env.PORT || 7000,
})

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

  // Adding client routes
  server.route(clientRoutes(server))

  // Adding server routes
  server.route(serverRoutes(server))

  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

init()

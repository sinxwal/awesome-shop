'use strict'

const Hapi = require('hapi')
const serverRoutes = require('./server/routes')
const clientRoutes = require('./client/routes')
const environment = process.env.NODE_ENV

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

const port = process.env.PORT || process.env.API_PORT || 8082

const server = Hapi.server({
  host: '0.0.0.0',
  port,
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

  // Adding client routes in production
  if (environment === 'production') {
    server.route(clientRoutes(server))
  }

  // Adding server routes
  server.route(serverRoutes(server))

  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

init()

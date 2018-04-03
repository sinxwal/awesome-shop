'use strict'

const Hapi = require('hapi'),
    routes = require('./server/routes')

const port = process.env.PORT || 5000
const host = process.env.HOST || 'localhost';
const server = Hapi.server({
  host: host,
  port: port,
})

// Adding client route.
server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return h.file('client/index.html')
  },
});

// Adding server routes.
server.route(routes(server))

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

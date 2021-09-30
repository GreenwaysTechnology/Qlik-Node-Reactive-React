'use strict'

const restify = require('restify')
const server = restify.createServer()

function sleep (ms) {
  const future = Date.now() + ms
  while (Date.now() < future);
}

//nonblocking api
server.get('/', function (req, res, next) {
  //blocking api
 // sleep(30)
  //io operation, socket io
  res.send({})
  next()
})

server.listen(3001)

process.on('SIGINT', function () {
  console.error('Caught SIGINT, shutting down.')
  server.close()
})

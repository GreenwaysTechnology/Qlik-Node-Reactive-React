'use strict'

const restify = require('restify')
const server = restify.createServer()
const async = require('async')

function awaitData (callback) {
  // async.series([
  //   (done1) => setTimeout(done1, 0),
  //   (done1) => async.parallel([
  //     (done2) => setTimeout(done2, 0),
  //     (done2) => setTimeout(done2,0),
  //     (done2) => setTimeout(done2,0),
  //     (done2) => setTimeout(done2,0),
  //     (done2) => setTimeout(done2, 0)
  //   ], done1)
  // ], callback)
   setTimeout(callback,1);
}

server.get('/', function (req, res, next) {
  awaitData(function () {
    res.send({})
    next()
  })
  // res.send({})
  // next()
})

server.listen(3001)

process.on('SIGINT', function () {
  console.error('Caught SIGINT, shutting down.')
  server.close()
})

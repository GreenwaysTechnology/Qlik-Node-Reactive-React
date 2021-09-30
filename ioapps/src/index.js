const http = require('http');

const server = http.createServer((req, res) => {
    //io operation : write hello into socket outputstream
    res.end('hello')
})

server.listen(3000, () => {
    console.log('Http server is up and running')
});
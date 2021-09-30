'use strict'

const express = require('express');
const app = express();

//cpu intensive code
function sleep(ms) {
    const timer = Date.now() + ms
    while (Date.now() < timer);
}

app.get('/', (req, res, next) => {
    //block the event loop thread.
    sleep(30)
    res.send({})
    next()
})

app.listen(3000)
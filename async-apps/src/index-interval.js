
function ping(cb) {
    setInterval(cb, 5000, new Date())
}
ping(data => console.log(data))
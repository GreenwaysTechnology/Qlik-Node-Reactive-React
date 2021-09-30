//factory pattern : Promise.resolve/reject==>Promise Object.


//how to process success results
function getMessage() {
    return Promise.resolve('Hello')
}

function getError() {
    return Promise.reject('oops!!')
}

function login(userName = "admin", password = "admin") {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('success')
    } else {
        return Promise.resolve('failed')
    }
}
function blockMe(status) {
    console.log(status)
}
blockMe('start')
getMessage()
    .then(value => console.log(value))
    .catch(err => console.log(err))
getError().then(value => console.log(value))
    .catch(err => console.log(err))

login('admin', 'admin')
    .then(value => console.log(value))
    .catch(err => console.log(err))

login('foo', 'admin')
    .then(value => console.log(value))
    .catch(err => console.log(err))

blockMe('end')

function fun1() {
    return new Promise((resolve, reject) => {
        console.log('fun1 is called')

        setTimeout(resolve, 3000, 1);
    })
}

function fun2() {
    return new Promise((resolve, reject) => {
        console.log('fun2 is called')

        setTimeout(resolve, 2000, 2);
    })
}
function fun3() {
    return new Promise((resolve, reject) => {
        console.log('fun3 is called')

        setTimeout(resolve, 1000, 3);
    })
}

function fun4() {
    return new Promise((resolve, reject) => {
        console.log('fun4 is called')

        setTimeout(reject, 6000, "error");
    })
}
function promiseAll() {
    // with success
    Promise
        .all([fun1(), fun2(), fun3()])
        .then(result => { console.log(result) })
        .catch(err => console.log(err))

    //error 
    Promise
        .all([fun1(), fun2(), fun3(), fun4()])
        .then(result => { console.log(result) })
        .catch(err => console.log(err))
}

function promiseRace() {
    // with success
    Promise.race([fun1(), fun2(), fun3()])
        .then(result => { console.log(result) })
        .catch(err => console.log(err))

    Promise
        .race([fun1(), fun2(), fun3(), fun4()])
        .then(result => { console.log(result) })
        .catch(err => console.log(err))
}

function main() {
    //promiseAll()
    promiseRace();
   
}
main();





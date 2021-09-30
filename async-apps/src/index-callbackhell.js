
//callback composition: the output of one callback will be input to another another callback - sequential async composition.

const getUser = (resolve, reject) => {
    let user = {
        id: 1,
        name: 'admin'
    };
    //if biz logic
    if (user) {
        setTimeout(resolve, 1000, user);
    } else {
        setTimeout(reject, 1000, { error: 'User Not found' })
    }
}

const login = (user, resolve, reject) => {
    if (user.name === 'admin') {
        setTimeout(resolve, 1000, 'login success');
    } else {
        setTimeout(reject, 1000, { error: 'login failed' })
    }
}
const showdashboard = (status, resolve, reject) => {
    if (status === 'login success') {
        setTimeout(resolve, 1000, 'You are admin');
    } else {
        setTimeout(reject, 1000, { error: 'You are not admin' })
    }
}

getUser(user => {
    login(user, status => {
        showdashboard(status, page => {
            console.log(status)
        }, err => {
            console.log(err)
        })
    }, err => {
        console.log(err)
    });
}, err => {
    console.log(err);
})
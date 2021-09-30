//async function, how to avoid thenables

//callee should return promise
const getUser = () => {
    return new Promise((resolve, reject) => {
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
    });
}

const login = user => {

    return new Promise((resolve, reject) => {
        if (user.name === 'admin') {
            setTimeout(resolve, 1000, 'login success');
        } else {
            setTimeout(reject, 1000, { error: 'login failed' })
        }
    })
}
const showdashboard = status => {
    return new Promise((resolve, reject) => {
        if (status === 'login success') {
            setTimeout(resolve, 1000, 'You are admin');
        } else {
            setTimeout(reject, 1000, { error: 'You are not admin' })
        }
    });
}

//how to process this without using thenables
//async ....await keyword

async function main() {
    //    getUser()
    //     .then(user=>console.log(user))
    //     .catch(err=>console.log(err))
    try {
        const user = await getUser();
        const status = await login(user);
        const page = await showdashboard(status);
        console.log(user, status, page);
    }
    catch (err) {
        console.log(err);
    }
}
main();


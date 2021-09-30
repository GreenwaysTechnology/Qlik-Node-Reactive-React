
//destructuring console object
const { log } = console;

//callback hell solving:
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
/////////////////////////////////////////////////
//caller : callback based

// getUser(user => {
//     login(user, status => {
//         showdashboard(status, page => {
//             console.log(status)
//         }, err => {
//             console.log(err)
//         })
//     }, err => {
//         console.log(err)
//     });
// }, err => {
//     console.log(err);
// })

//promise based -v1
/**
getUser()
    .then(user => {
        login(user)
            .then(status => {
                showdashboard(status)
                    .then(page => {
                        console.log(page);
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => {
                console.log(err)
            })
    })
    .catch(err => {
        console.log(err)
    });
    **/

//code refactoring:

// getUser()
//     .then(user => {
//         return login(user);
//     })
//     .then(status => {
//         return showdashboard(status)
//     })
//     .then(page=>{
//         console.log(page)
//     })
//     .catch(err => console.log(err));

getUser()
    .then(user => login(user))
    .then(status => showdashboard(status))
    .then(page => console.log(page))
    .catch(err => console.log(err));
//We can reduce the code using es6 destructuring concept : method reference 


//This is for single params
getUser()
    .then(login) //method reference
    .then(showdashboard) //method reference
    .then(log)
    .catch(log);
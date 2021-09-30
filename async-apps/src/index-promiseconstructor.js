//Promise Constructors

//calleee
//legacy getUser using callbacks
/**
function getUser(resolve, reject) {

    let user = {
        id: 1,
        name: 'admin'
    };
    let error = {
        message: 'User not found'
    }
    if (user) {
        setTimeout(resolve, 1000, user)
    } else {
        setTimeout(error, 1000, error)
    }
}


//caller
//here we pass callback function as parameter
getUser(res => {
    console.log(res)
}, err => {
    console.log(err);
})
 */

//caller with promise
function getUser() {

    return new Promise((resolve, reject) => {
        let user = {
            id: 1,
            name: 'admin'
        };
        let error = {
            message: 'User not found'
        }
        if (user) {
            setTimeout(resolve, 1000, user)
        } else {
            setTimeout(reject, 1000, error)
        }
    })

}

//caller
//here we dont pass callback function as parameter
getUser()
    .then(res => console.log(res))
    .catch(err => console.log(err));
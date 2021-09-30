//async function
//normal function which returns 10
function getValue(){
    return 10;
}
console.log(getValue());

async function getValue1(){
    return 10;  // return Promise.resolve(10)
}
console.log(getValue1());
getValue1().then(value=>console.log(value))

async function getSomething(){
    return new Promise((resolve,reject)=>{
         setTimeout(resolve,100,'something')
    })
}
getSomething().then(value=>console.log(value))

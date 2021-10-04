const { ServiceBroker } = require("moleculer");

//create Service Broker object 
const broker = new ServiceBroker();

//Create Service Object
//service schema - Object definition
broker.createService({
    name: 'hello',
    actions: {
        //apis
        sayHello() {
            return 'Hello,MicroService!!'
        }
    }
});

// function main() {
//     //start the broker and deploy the service
//     broker.start()
//         .then(() => {
//             console.log('services are ready to access')
//             //invoke service methods
//             broker.call('hello.sayHello')
//                 .then(res => console.log(res))
//                 .catch(err => console.log('service method gives error ', err));
//         })
//         .catch(err => {
//             console.log('deployment failed -->', err)
//         });
// }

//async await
async function main() {
    //start the broker and deploy the service
    try {
        await broker.start()
        const response = await broker.call('hello.sayHello');
        console.log(response);
    }
    catch (err) {
        console.log(err);
    }

}


main();
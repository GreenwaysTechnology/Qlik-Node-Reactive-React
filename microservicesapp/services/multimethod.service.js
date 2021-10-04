const { ServiceBroker } = require("moleculer");

//create Service Broker object 
const broker = new ServiceBroker();

//Create Service Object
//service schema - Object definition
broker.createService({
    name: 'greeter',
    actions: {
        //apis
        sayHello() {
            return 'Hello,MicroService!!'
        },
        sayHai() {
            return 'Hai,MicroService!!!';
        },
        sayWelcome() {
            return 'Welcome ,MicroService!'
        }
    }
});

//async await
async function main() {
    //start the broker and deploy the service
    try {
        await broker.start()
        const hello = await broker.call('greeter.sayHello');
        const hai = await broker.call('greeter.sayHai')
        const greet = await broker.call('greeter.sayWelcome')
        console.log(hello);
        console.log(hai);
        console.log(greet);

    }
    catch (err) {
        console.log(err);
    }

}


main();
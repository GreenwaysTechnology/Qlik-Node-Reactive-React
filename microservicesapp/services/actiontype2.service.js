const { ServiceBroker } = require("moleculer");

const broker = new ServiceBroker();

broker.createService({
    name: 'greeter',
    version: 1,
    actions: {
        sayHello: {
            //handler:biz logic goes inside
            handler() {
                return 'Hello! Handler Microservice'
            }
        },
        sayHai: {
            handler() {
                return 'Hai! Handler Microservice!'
            }
        }
    }
});


async function main() {
    //start the broker and deploy the service
    try {
        await broker.start()
        const hello = await broker.call('v1.greeter.sayHello');
        const hai = await broker.call('v1.greeter.sayHai');

        console.log(hello);

    }
    catch (err) {
        console.log(err);
    }

}


main();
const { ServiceBroker } = require("moleculer");

const broker = new ServiceBroker();

broker.createService({
    name: 'hello',
    version: 1,
    actions: {
        sayHello() {
            return 'Hello,Legacy MicroService!!'
        },
    }
});


broker.createService({
    name: 'hello',
    version: 2,
    actions: {
        sayHello() {
            return 'Hello,Modern MicroService!!'
        },
    }
});

//async await
async function main() {
    //start the broker and deploy the service
    try {
        await broker.start()
        const oldhello = await broker.call('v1.hello.sayHello');
        const newhello = await broker.call('v2.hello.sayHello');
        console.log(oldhello);
        console.log(newhello);

    }
    catch (err) {
        console.log(err);
    }

}


main();
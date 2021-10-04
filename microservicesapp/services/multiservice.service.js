const { ServiceBroker } = require("moleculer");

const broker = new ServiceBroker();

broker.createService({
    name: 'hello',
    actions: {
        sayHello() {
            return 'Hello,MicroService!!'
        },
    }
});

broker.createService({
    name: 'hai',
    actions: {
        sayHai() {
            return 'Hai,MicroService!!'
        },
    }
});


broker.createService({
    name: 'welcome',
    actions: {
        sayWelcome() {
            return 'Welcome,MicroService!!'
        },
    }
});

//async await
async function main() {
    //start the broker and deploy the service
    try {
        await broker.start()
        const hello = await broker.call('hello.sayHello');
        const hai = await broker.call('hai.sayHai')
        const greet = await broker.call('welcome.sayWelcome')
        console.log(hello);
        console.log(hai);
        console.log(greet);

    }
    catch (err) {
        console.log(err);
    }

}


main();
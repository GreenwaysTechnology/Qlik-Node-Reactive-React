const { ServiceBroker } = require("moleculer");

const broker = new ServiceBroker();

broker.createService({
    name: 'hello',
    actions: {
        sayHello(ctx) {
            // console.log(ctx.params.name);
            const { name,message } = ctx.params;
            return `${message} , ${name}`
        }
    }
});



//async await
async function main() {
    //start the broker and deploy the service
    try {
        await broker.start()
        //pass parameters
        const response = await broker.call('hello.sayHello', { name: 'Subramanian',message:'Hello' });
        console.log(response);
    }
    catch (err) {
        console.log(err);
    }

}


main();
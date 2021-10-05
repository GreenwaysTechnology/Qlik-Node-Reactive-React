const { ServiceBroker } =  require("moleculer");

const broker = new ServiceBroker();

//calculator service
broker.createService({
    name: 'calculator',
    actions: {
        add(ctx) {
            const { a, b } = ctx.params;
            //call another service : service communications
            return ctx.call('adder.add',{a:a,b:b});
        }
    }
})
broker.createService({
    name: 'adder',
    actions: {
        add(ctx) {
            const { a, b } = ctx.params;
            return a + b;
        }
    }
})


async function main() {
    try {
        await broker.start()
        broker.repl();
    }
    catch (err) {
        console.log(err);
    }

}
main();
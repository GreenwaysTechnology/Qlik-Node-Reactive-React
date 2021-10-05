const { ServiceBroker } = require("moleculer");

const broker = new ServiceBroker({
    // transporter: "nats://localhost:4222",
    transporter: 'TCP',

    nodeID : 'Qlik-Server1'

});

broker.createService({
    name: 'calculator',
    actions: {
        add: {
            handler(ctx) {
                const { a, b } = ctx.params;
                //call service1 remote1.service.js
                return ctx.call('adder.add', { a: a, b: b });

            }
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
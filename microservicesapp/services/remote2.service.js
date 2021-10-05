const { ServiceBroker } = require("moleculer");

const broker = new ServiceBroker({
    // transporter: "nats://localhost:4222",
    transporter: 'TCP',
    nodeID : 'Qlik-Server2'
});

broker.createService({
    name: 'adder',
    actions: {
        add: {
            handler(ctx) {
                const { a, b } = ctx.params;
                //call service1 remote1.service.js
                return `${a + b} from ${broker.nodeID}`

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
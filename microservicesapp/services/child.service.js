const Parent = require('./parent.service');
const ParentTwo = require('./parent2.service');

const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker();


broker.createService({
    name: 'greeter',
    mixins: [Parent,ParentTwo], // inheritance
    actions: {
        sayGreet() {
            return 'Greeter From Child';
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

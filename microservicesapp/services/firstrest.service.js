const { ServiceBroker } = require('moleculer');
const ApiGateWay = require('moleculer-web');

const broker = new ServiceBroker();

//REST Service

broker.createService({
    name: 'greeter',
    actions: {
        sayHello() {
            return 'Greeter,REST service'
        }
    }
})

broker.createService({
    name: 'hello',
    actions: {
        sayHello() {
            return 'Hello,REST service'
        }
    }
})
//REST Server:
broker.createService(ApiGateWay);

async function main() {
    await broker.start();
}
main();

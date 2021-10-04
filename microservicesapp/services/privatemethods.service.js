const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker();

broker.createService({
    name: 'calculator',
    //public methods
    actions: {
        add(ctx) {
            const { a, b } = ctx.params;
            const result = this.addNumbers(a, b);
            return result;
        },
        substract(ctx) {
            const { a, b } = ctx.params;
            const result = this.substractNumbers(a, b);
            return result;
        },
    },
    //private methods
    methods: {
        addNumbers(a, b) {
            return a + b;
        },
        substractNumbers(a, b) {
            return a - b;
        }
    }
})


async function main() {
    try {
        await broker.start()
        const res = await broker.call('calculator.add', { a: 10, b: 10 })
        console.log(res);
        const res1 = await broker.call('calculator.substract', { a: 10, b: 2 })
        console.log(res1);

    }
    catch (err) {
        console.log(err);
    }

}
main();
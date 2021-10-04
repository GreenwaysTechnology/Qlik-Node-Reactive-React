const { ServiceBroker } = require("moleculer");

//create Service Broker object 
const broker = new ServiceBroker();

broker.createService({
    name: 'math',
    actions: {
        add: {
            async handler(ctx) {
                const { x, y } = ctx.params;
                return x + y; //Promise.resolve(x+y)
            }
        }
    }
})
async function main() {
    try {
        await broker.start();
        // const res = await broker.call('math.add',{x:10,y:20})
        // console.log(res);
        broker.repl();
    }
    catch(err){
        console.log(err);
    }
}
main();
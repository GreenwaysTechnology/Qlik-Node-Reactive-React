const { ServiceBroker } = require("moleculer");

const broker = new ServiceBroker();

broker.createService({
    name: 'math',
    actions: {

        add: {
            //metadata : Validatation code
            params: {
                a: 'number',
                b: 'number'
            },
            handler(ctx) {
                const { a, b } = ctx.params;
                //wrap the code inside timer and promise
                return new this.Promise((resolve, reject) => {
                    setTimeout(resolve, 5000, (a + b))
                })
            }
        }
    }
});



//async await
async function main() {
    //start the broker and deploy the service
    try {
        await broker.start()
        //pass parameters
        let response;
        response = await broker.call('math.add', { a: 10, b: 10 });
        console.log(response);

    }
    catch (err) {
        console.log(err);
    }

}


main();
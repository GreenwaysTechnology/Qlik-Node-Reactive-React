import { Observable, Subscriber } from "rxjs";

class Producer {
    constructor() {

    }
    //push/stream sequence of values
    startStream() {
        //create Publisher
        return new Observable(subscriber => {
            //start push values:trigger data event
            console.log('ob')
            subscriber.next(1);
            subscriber.next(2);
            subscriber.next(3);
            try {
                let myNumber = 100;
                if (myNumber === 100) {
                    throw Error('something went wrong')
                }
            }
            catch (err) {
                subscriber.error(err);
            }
            subscriber.next(4);
            subscriber.next(5);
            setTimeout(() => {
                subscriber.next(6);
                //  subscriber.complete();
            }, 5000)
            // let timerId = setInterval(() => {
            //     subscriber.next(Math.random())
            // }, 1000);
            //subscriber.complete();
            // setTimeout(() => {
            //     clearInterval(timerId)
            //     //stop sending data , which tells close the outbound channel
            //     // subscriber.complete();
            // }, 10000)
        });

    }
}

class Consumer {
    constructor(producer) {
        this.producer = producer;
    }
    consumeStream() {
        //bind listenter
        const subscription = this.producer.startStream()
            .subscribe(data => console.log(data),
                err => console.log(err),
                () => console.log('stream Completed!'));
        //unsubscribe : stop receiving data from the stream
        setTimeout(() => {
            console.log('Consumer left ):')
            subscription.unsubscribe();
        }, 10000)

    }
}
let producer = new Producer();
let consumer = new Consumer(producer);
consumer.consumeStream();
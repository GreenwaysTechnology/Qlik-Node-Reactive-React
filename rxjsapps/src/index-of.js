import { Observable, of, Subscriber } from "rxjs";

class Producer {
    constructor() {

    }
    startStream() {
        return of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
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


    }
}
let producer = new Producer();
let consumer = new Consumer(producer);
consumer.consumeStream();
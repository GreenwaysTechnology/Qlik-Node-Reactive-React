import { from, Observable, Subject, interval } from 'rxjs';
import {filter} from 'rxjs/operators';

//Here we have just converted a unicast Observable execution to multicast through the Subject. How subjects are the only way of making any observable execution be shared to multiple observers.
//Create Subject
const subject = new Subject();
//Register subject :  registering event listener
subject.subscribe(data => console.log('Observer-1', data));
subject.subscribe(data => console.log('Observer-2', data));
subject.subscribe(data => console.log('Observer-3', data));
const subscription = subject.subscribe(data => console.log('Observer-4', data));
subject.subscribe(data => console.log('Observer-5', data));

setTimeout(() => {
    console.log('Observer-4 is leaving')
    subscription.unsubscribe();
}, 5000)

const isEven = i => i % 2 === 0;

//unicast cold stream
// const obs = from([1,2,3,])
const obs = interval(1000).pipe(filter(isEven))
obs.subscribe(subject);


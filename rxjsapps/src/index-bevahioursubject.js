import { BehaviorSubject,interval } from "rxjs";
import {filter} from 'rxjs/operators';

//creating subject
const subject = new BehaviorSubject(9990);
//registering 
subject.subscribe(data => console.log('Observer-1', data));
subject.subscribe(data => console.log('Observer-1', data));

//emission
// for (let i = 0; i < 10; i++) {
//     setTimeout(() => {
//         subject.next(i);
//     }, 1000)
// }
const isEven = i => i % 2 === 0;
const obs = interval(1000).pipe(filter(isEven))
obs.subscribe(subject);
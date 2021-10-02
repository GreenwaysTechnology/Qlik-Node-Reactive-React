import { ReplaySubject } from "rxjs";

//here 3 buffer value -how many elements can store in buffer for replay
//Replay subject can record the lastest of N values.
//if you dont tell, the buffer size, it can record all values
const subject = new ReplaySubject(10);

//registration
subject.subscribe(data=>{
    console.log('observer-1',data);
})

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe(data=>{
    console.log('observer-2',data);
})

subject.next(5);
subject.next(6);
subject.next(7);
subject.next(8);
subject.next(9);
subject.next(10);

subject.subscribe(data=>{
    console.log('observer-3',data);
})
subject.next(11);

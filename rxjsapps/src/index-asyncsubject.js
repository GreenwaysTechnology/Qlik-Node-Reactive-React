import { AsyncSubject } from "rxjs";


const subject = new AsyncSubject();

subject.subscribe(data => console.log('observer-1', data))
subject.subscribe(data => console.log('observer-2', data))

subject.next(10)
subject.next(20)
subject.next(30)
subject.next(40)
subject.next(50)
//call complete
 subject.complete();

 subject.subscribe(data => console.log('observer-3', data))
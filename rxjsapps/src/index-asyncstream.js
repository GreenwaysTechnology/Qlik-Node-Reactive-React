import { Observable,asyncScheduler } from "rxjs";
import { observeOn } from "rxjs/operators";

const stream = new Observable(observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    observer.complete();
}).pipe(observeOn(asyncScheduler));

console.log('just before subscription')
stream.subscribe((data) => console.log(data));
console.log('just after subscription')



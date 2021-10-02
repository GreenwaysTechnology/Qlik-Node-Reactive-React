import { Observable, asyncScheduler, from } from "rxjs";
import { observeOn } from "rxjs/operators";

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const stream = from(array,asyncScheduler)

console.log('just before subscription')
stream.subscribe((data) => console.log(data));
console.log('just after subscription')



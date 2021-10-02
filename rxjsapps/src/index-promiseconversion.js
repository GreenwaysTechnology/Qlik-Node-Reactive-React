//Promise vs Observable
/**
 * Promise is also  push based / event based
 * Observable is stream based, which sequence of values over period of time.
 *  Promise is request-reply based -  emits value/error which closes the communication where as observable can emit multiple values
 */

//observable into promise.
import { of } from 'rxjs';

function getValue() {
    return of([1, 2, 3, 4, 5, 6, 7]).toPromise();
}
const { log } = console;
async function main() {
   // getValue().then(log)
   const value = await getValue();
   log(value);
}
main()
import { interval, of } from "rxjs";
import { catchError, map, retryWhen, take } from 'rxjs/operators'

let errorFixed = false;

let values = interval(1000).pipe(
    take(20),
    map(val => {
        if (errorFixed) {
            return val;
        } else if (val > 0 && val % 2 === 0) {
            errorFixed = true;
            throw { error: 'error' };
        } else {
            return val;
        }
    }),
    retryWhen(err => {
        console.log('retrying....')
        return err;
    }),
    catchError(err => {
        return of('fallback')
    })
)

values.subscribe(data => console.log(data))
//error handling operator
import { of } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators'

function fallback() {
    return 0;
}

function handleError() {
    return of(1, 2, 3, 4, 5).pipe(
        map(value => {
            //console.log('called')
            if (value > 3) {
                throw new Error('ddd')
            }
            return value;
        }),
        retry(5),
        catchError(err => {
            return of(fallback());
        })

    );
}

function main() {
    handleError().subscribe(
        data => {
            console.log('data', data)
        }, err => {
            console.log(err);
        }, () => {
            console.log('completed')
        }
    )
}
main();
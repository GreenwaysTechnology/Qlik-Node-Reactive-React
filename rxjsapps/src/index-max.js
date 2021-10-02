import { of } from 'rxjs'
import { max } from 'rxjs/operators';

function getCount() {
    return of(1, 5, 5, 6, 6, 78, 89).pipe(
        max()
    )
}
const compare = (firstObj, secondObj) => {
    if (firstObj.age > secondObj.age) {
        return 1;
    } else if (firstObj.age < secondObj.age) {
        return -1;
    } else {
        return 0;
    }
}
function findMaxAge() {
    return of(
        { id: 1, name: 'john', age: 48 },
        { id: 2, name: 'chris', age: 67 },
        { id: 3, name: 'karthik', age: 34 },
        { id: 4, name: 'ram', age: 28 }
    ).pipe(
        max(compare)
    )
}


const { log } = console;
getCount().subscribe(log);
findMaxAge().subscribe(log);
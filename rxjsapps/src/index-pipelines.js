import { range, tap } from 'rxjs';
import { filter, map } from 'rxjs/operators'


const isEven = i => i % 2 === 0;
const doubleIt = i => i * 2;

function stream() {
    return range(1, 25).pipe(
        //pipeline-1
        tap(x => console.log(`emits every value`, x)),
        // //pipleline-2: filter
        // filter(i=>{
        //     return i %2===0;
        // })
        // filter(i => isEven(i))
        filter(isEven),
        //pipeline-3
        map(doubleIt),
        map(doubleIt)
    )
}

function main() {
    stream().subscribe(data => {
        console.log(data);
    }, err => {
        console.log(err);
    }, () => console.log('stream is done'))
}
main();

/**
 * how to reduce lambda code
 */

// const getUser = () => {
//     return Promise.resolve({ id: 1, name: 'subramanian' })
// }
// // getUser().then(function (user) {
// //   console.log(user);
// // }).catch(function (err) {
// //     console.log(err);
// // })
// // getUser().then((user) => {
// //     console.log(user);
// // }).catch((err) => {
// //     console.log(err);
// // })
// //destructuring
// const { log } = console;
// // getUser().then(user => log(user)).catch(err => log(err))
// //method reference syntax
// getUser().then(log).catch(log)
import { interval } from 'rxjs';
import { share } from 'rxjs/operators'


const stream = interval(1000).pipe(
    share()
);
function emitValues() {
    return stream;
}
function main() {
    //subscriber 1
    emitValues().subscribe(values => {
        console.log('Subscriber-1', values);
    });

    //subscriber2
    setTimeout(() => {
        console.log('Joining late')
        emitValues().subscribe(values => {
            console.log('Subscriber-2', values);
        });
    }, 10000);


}
main()
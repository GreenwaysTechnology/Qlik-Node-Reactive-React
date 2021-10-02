import { interval } from 'rxjs';
import {publish} from 'rxjs/operators'

let hotStream = interval(1000).pipe(
    publish()
);
function emitValues() {
    return hotStream;
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

    hotStream.connect();

}
main()
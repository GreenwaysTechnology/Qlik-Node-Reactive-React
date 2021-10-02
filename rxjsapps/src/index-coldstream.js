import { interval } from 'rxjs';

function emitValues() {
    return interval(1000).pipe();
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
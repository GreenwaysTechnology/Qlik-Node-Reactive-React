import { fromEvent, range } from "rxjs";

const stream = range(1, 100)

stream.subscribe(values => {
    console.log(values);
});
import { fromEvent } from "rxjs";

const mouseClicks = fromEvent(document, 'click')

mouseClicks.subscribe(values=> {
    console.log(values);
});
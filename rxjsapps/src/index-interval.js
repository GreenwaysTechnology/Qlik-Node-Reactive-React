import { interval } from "rxjs";

const numbers = interval(1000);
numbers.subscribe((value)=>console.log(value))
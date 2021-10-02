import { empty } from "rxjs";

const stream = empty();
stream.subscribe(data => console.log(data),
                err => console.log(err),
                () => console.log('stream Completed!'));
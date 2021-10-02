import { Subject } from 'rxjs';

//Create Subject
const subject = new Subject();
//Register subject :  registering event listener
subject.subscribe(data => console.log('Observer-1', data));
subject.subscribe(data => console.log('Observer-2', data));
//emit value before registration
for (let i = 0; i < 10; i++) {
    subject.next(i)
}



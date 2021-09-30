import { ajax } from 'rxjs/ajax';

const stream = ajax(`https://api.github.com/users?per_page=5`)

stream.subscribe(value=>console.log(value.response))
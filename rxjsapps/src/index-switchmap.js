import { from, of } from "rxjs";
import { switchMap } from 'rxjs/operators';

function processFlow() {
    return of({ message: 'Logged in' }).pipe(
        switchMap(result => {
            //console.log(result)
            //return user details
            if(result.message ==='Logged in'){
                return of({ id: 80, name: 'admin',status:result.message })
            }else{
                //return of('No login failed')
            }
           
        }),
        switchMap(user => {
        //console.log(user);
            //get the user from the previous switchMap
            return from([{ id: 100, userId: user.id ,name:user.name }, { id: 123, userId: user.id,name:user.name }]);
        })

    )
}

function main() {
   processFlow().subscribe(orders=>console.log('orders',orders));
}
main();
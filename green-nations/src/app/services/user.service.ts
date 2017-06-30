import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { UserApi } from '../../fw/users/user-api';

@Injectable()
export class UserService implements UserApi {
    isAuthenticated = false;
    constructor(private router: Router) {}

    signIn(username: string, password: string, rememberMe: boolean): Observable<any> {
        console.log('UserService.signIn' + username + ' ' + password + ' ' + rememberMe);
         this.isAuthenticated = true;
         return Observable.of({}).delay(2000);

        // return Observable.of({}).delay(2000).flatMap(x => Observable.throw('Invalid User Name or password'));
    }

    signOut() {
        this.isAuthenticated = false;
        this.router.navigate(['/signin']);
        return Observable.of({});
    }
}

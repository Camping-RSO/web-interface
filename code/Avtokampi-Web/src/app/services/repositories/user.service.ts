import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject, ReplaySubject} from 'rxjs';

import {Uporabnik as User, uporabniki} from '../../models';
import {distinctUntilChanged} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private currentUserSubject = new BehaviorSubject<User>({} as User);
    public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());
    public currentUserObject;

    private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
    public isAuthenticated = this.isAuthenticatedSubject.asObservable();

    constructor() {
    }

    populate() {
        this.purgeAuth();
    }

    setAuth(user: User) {
        this.currentUserSubject.next(user);
        this.currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());
        this.currentUserObject = user;
        this.isAuthenticatedSubject.next(true);
    }

    purgeAuth() {
        this.currentUserSubject.next({} as User);
        this.isAuthenticatedSubject.next(false);
    }

    attemptAuth(type, credentials): Observable<User> {
        let user = null;
        for (const uporabnik of uporabniki) {
            if (uporabnik.email === credentials.username) {
                user = uporabnik;
            }
        }
        const route = (type === 'login') ? '/login' : '/register';
        if (route === '/register') {
            this.attemptAuth('login', {email: credentials.email, password: credentials.geslo})
                .subscribe(login => login);
        } else {
            this.setAuth(user);
            return this.currentUserSubject;
        }
    }

    getCurrentUser(): User {
        return this.currentUserSubject.value;
    }
}

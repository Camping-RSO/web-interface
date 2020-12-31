import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, BehaviorSubject, ReplaySubject} from 'rxjs';

import {ApiService} from './api.service';
import {Uporabnik, Uporabnik as User, uporabniki} from '../../models';
import {map, distinctUntilChanged} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private currentUserSubject = new BehaviorSubject<User>({} as User);
    public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

    private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
    public isAuthenticated = this.isAuthenticatedSubject.asObservable();

    constructor(
        private apiService: ApiService,
        private http: HttpClient,
    ) {
    }

    populate() {
        this.purgeAuth();
    }

    // populate() {
    //     const getToken = this.jwtService.getToken();
    //     if (getToken) {
    //         const username = this.jwtService.getDecodedTokenUsername(getToken);
    //         this.apiService.get(`/uporabniki/${username}/username`)
    //             .subscribe(
    //                 data => {
    //                     data.token = getToken;
    //                     this.setAuth(data);
    //                 },
    //                 err => this.purgeAuth()
    //             );
    //     } else {
    //         this.purgeAuth();
    //     }
    // }

    //     const getToken = this.jwtService.getToken();
    //     if (getToken) {
    //         const username = this.jwtService.getDecodedTokenUsername(getToken);
    //         this.apiService.get(`/uporabniki/${username}/username`)
    //             .subscribe(
    //                 data => {
    //                     data.token = getToken;
    //                     this.setAuth(data);
    //                 },
    //                 err => this.purgeAuth()
    //             );
    //     } else {
    //         this.purgeAuth();
    //     }
    // }

    // getUser() {
    //     const getToken = this.jwtService.getToken();
    //         if (getToken) {
    //         const username = this.jwtService.getDecodedTokenUsername(getToken);
    //         this.apiService.get(`/uporabniki/${username}/username`)
    //             .subscribe(
    //                 data => {
    //                     data.token = getToken;
    //                     return data;
    //                 },
    //                 err => this.purgeAuth()
    //             );
    //     } else {
    //         this.purgeAuth();
    //     }
    //     return null;
    // }

    setAuth(user: User) {
        this.currentUserSubject.next(user);
        this.isAuthenticatedSubject.next(true);
    }

    purgeAuth() {
        this.currentUserSubject.next({} as User);
        this.isAuthenticatedSubject.next(false);
    }

    attemptAuth(type, credentials): Observable<User> {
        let user = null;
        credentials.username = credentials.email;
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

    // update(user): Observable<User> {
    //     return this.apiService
    //         .put('/uporabniki', { ...user })
    //         .pipe(map(data => {
    //             // Update the currentUser observable
    //             this.currentUserSubject.next(data.user);
    //             return data.user;
    //         }));
    // }
}

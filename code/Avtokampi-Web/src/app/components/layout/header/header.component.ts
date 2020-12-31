import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services';
import { Uporabnik as User } from '../../../models';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    currentUser: User;

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit() {
        this.userService.currentUser.subscribe(
            (userData) => {
                this.currentUser = userData;
            }
        );
    }

    logout() {
        this.userService.purgeAuth();
        this.router.navigateByUrl('/');
    }

}

import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { UserService } from './services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Avtokampi';

    routerSubscription: any;

    constructor(
        private router: Router,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.recallJsFuntions();
        this.userService.populate();
    }

    ngOnDestroy() {
        this.routerSubscription.unsubscribe();
    }

    recallJsFuntions() {
        this.routerSubscription = this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(event => {
                $.getScript('assets/js/main-theme.js');
                window.scrollTo(0, 0);
            });
    }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../services';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    // authType: String = '';
    // title: String = '';
    // errors: Errors = { errors: {} };
    isSubmitting = false;
    authForm: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private fb: FormBuilder
    ) {
        this.authForm = this.fb.group({
            'email': ['', Validators.required],
            'password': ['', Validators.required]
        });
    }

    ngOnInit() {

    }

    submitForm() {
        this.isSubmitting = true;
        // this.errors = { errors: {} };

        const credentials = this.authForm.value;
        this.userService
            .attemptAuth('login', credentials)
            .subscribe(
                data => this.router.navigateByUrl('/'),
                err => {
                    console.log(err);
                    // this.errors = err;
                    this.isSubmitting = false;
                }
            );
    }
}

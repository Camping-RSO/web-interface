import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../services';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    isSubmitting = false;
    authForm: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        this.authForm = this.fb.group({
            'ime': ['', Validators.required],
            'priimek': ['', Validators.required],
            'email': ['', Validators.required],
            'telefon': [''],
            'geslo': ['', Validators.required],
            'comfirmGeslo': [''],
            'gdpr': [false, Validators.required]
        }, { validator: this.checkPasswords });
    }

    checkPasswords(group: FormGroup) {
        let pass = group.get('geslo').value;
        let confirmPass = group.get('comfirmGeslo').value;

        return pass === confirmPass ? null : { notSame: true };
    }

    submitForm() {
        this.isSubmitting = true;
        // this.errors = { errors: {} };

        const credentials = this.authForm.value;
        this.userService
            .attemptAuth('register', credentials)
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

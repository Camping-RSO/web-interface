import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Avtokamp, KampirnoMesto, Uporabnik as User, VrstaKampiranja } from '../../../models';
import { AvtokampiService, KampirnaMestaService, UserService, RezervacijeService } from '../../../services';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-reservation-form',
    templateUrl: './reservation-form.component.html',
    styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit, OnDestroy {
    private _onDestroy = new Subject<void>();
    @Input() campId?: number;
    @Input() kampMestoId?: number;
    @Input() camp?: Avtokamp;
    @Input() kampMesto?: KampirnoMesto;
    user: User = {} as User;
    isSubmitting = false;
    reservationForm: FormGroup;
    vrstaKampiranjaKampa: VrstaKampiranja[];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private avtokampiService: AvtokampiService,
        private kampirnaMestaService: KampirnaMestaService,
        private reservationService: RezervacijeService,
        private userService: UserService,
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        if (!this.campId) {
            this.route.paramMap.pipe(takeUntil(this._onDestroy))
                .subscribe((params: ParamMap) => this.campId = parseInt(params.get('avtokampId')));
        }

        if (!this.kampMestoId) {
            this.route.paramMap.pipe(takeUntil(this._onDestroy))
                .subscribe((params: ParamMap) => this.kampMestoId = parseInt(params.get('kampirnoMestoId')));
        }

        if (this.campId && !this.camp) {
            this.avtokampiService.get(this.campId).pipe(takeUntil(this._onDestroy)).subscribe(camp => this.camp = camp);
        }

        if (this.kampMestoId && !this.kampMesto) {
            this.kampirnaMestaService.get(this.kampMestoId).pipe(takeUntil(this._onDestroy)).subscribe(mesta => this.kampMesto = mesta);
        }

        this.reservationService.getVrsteKampiranja().pipe(takeUntil(this._onDestroy)).subscribe(vrsta => this.vrstaKampiranjaKampa = vrsta);

        Object.assign(this.user, this.userService.getCurrentUser());

        this.reservationForm = this.fb.group({
            'trajanjeOd': ['', Validators.required],
            'trajanjeDo': ['', Validators.required],
            'vrstaKampiranja': ['', Validators.required],
            'gdpr': [false, Validators.required]
        });
    }

    ngOnDestroy(): void {
        this._onDestroy.next();
        this._onDestroy.complete();
    }

    getKampMestoArray() {
        return [this.kampMesto];
    }

    submitForm() {
        this.isSubmitting = true;
        // this.errors = { errors: {} };

        let reservationData = this.reservationForm.value;
        reservationData = {
            ...reservationData,
            avtokamp: this.campId,
            kampirnoMesto: this.kampMestoId,
            uporabnik: this.user.uporabnikId,
            statusRezervacije: 1,
        };
        this.reservationService.post(reservationData).pipe(takeUntil(this._onDestroy))
            .subscribe(
                data => this.router.navigateByUrl('/'),
                err => {
                    console.log(err);
                    // this.errors = err;
                    this.isSubmitting = false;
                }
            );
    }

    trackById(index, vrsta) {
        return vrsta.vrstaKampiranjaId;
    }

}

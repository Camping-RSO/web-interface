import { Component, OnInit, OnDestroy } from '@angular/core';
import { AvtokampiService, KampirnaMestaService, RezervacijeService, UserService } from '../../services/repositories';
import { Avtokamp, KampirnoMesto, Rezervacija, Slika, Uporabnik as User } from '../../models';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {

    private _onDestroy = new Subject<void>();
    reservations: Rezervacija[];
    camps: Avtokamp[];
    campingSpots: KampirnoMesto[];
    campImages: Slika[];
    currentUser: User;

    constructor(
        private rezervacijeService: RezervacijeService,
        private userService: UserService,
        private avtokampiService: AvtokampiService,
        private kamprinaMestaService: KampirnaMestaService,
        private domSanitizer: DomSanitizer
    ) { }

    ngOnInit() {
        console.log(this.userService.currentUser);
        console.log(this.userService.currentUserObject);
        this.userService.currentUser.pipe(takeUntil(this._onDestroy)).subscribe(userData => this.currentUser = userData);
        this.currentUser = this.userService.currentUserObject;

        this.rezervacijeService.getUserReservations(this.currentUser.uporabnikId)
                               .pipe(takeUntil(this._onDestroy))
                               .subscribe(m => {
            this.reservations = m;
            this.camps = [];
            this.campingSpots = [];
            this.campImages = [];
            for (const res of this.reservations) {
                this.avtokampiService.get(res.avtokamp)
                                     .pipe(takeUntil(this._onDestroy))
                                     .subscribe(m => this.camps[res.rezervacijaId] = m);

                this.kamprinaMestaService.get(res.kampirno_mesto)
                                         .pipe(takeUntil(this._onDestroy))
                                         .subscribe(m => this.campingSpots[res.rezervacijaId] = m);

                this.avtokampiService.getSlika(res.avtokamp)
                                     .pipe(takeUntil(this._onDestroy))
                                     .subscribe(m => this.campImages[res.rezervacijaId] = m);
            }
        });
    }

    ngOnDestroy(): void {
        this._onDestroy.next();
        this._onDestroy.complete();
    }

    getImage(image: any) {
        const preparedImg = image ? this.domSanitizer.bypassSecurityTrustStyle(`url('${image}')`) :
            `url('camping-web-interface/assets/images/destination-1.jpg')`;
        return preparedImg;
    }

    trackById(index, res) {
        return res.rezervacijaId;
    }

}

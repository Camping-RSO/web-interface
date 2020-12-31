import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { KampirnoMesto, Avtokamp, Cenik, Uporabnik } from '../../../models';
import { KampirnaMestaService, AvtokampiService, UserService } from '../../../services';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-camping-pitches',
    templateUrl: './camping-pitches.component.html',
    styleUrls: ['./camping-pitches.component.css']
})
export class CampingPitchesComponent implements OnInit, OnDestroy {
    private _onDestroy = new Subject<void>();
    @Input() campId?: number;
    @Input() camp?: Avtokamp;
    @Input() kampMesta?: KampirnoMesto[];
    @Input() cenik?: Cenik;
    user: Uporabnik;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private avtokampiService: AvtokampiService,
        private kampirnaMestaService: KampirnaMestaService,
        private userService: UserService
    ) { }

    ngOnInit() {
        if (!this.campId) {
            this.route.paramMap.pipe(takeUntil(this._onDestroy))
                .subscribe((params: ParamMap) => this.campId = parseInt(params.get('avtokampId')));
        }

        if (this.campId && !this.camp) {
            this.avtokampiService.get(this.campId).pipe(takeUntil(this._onDestroy)).subscribe(camp => this.camp = camp);
        }

        if (this.campId && !this.kampMesta) {
            this.kampirnaMestaService.getByAvtokamp(this.campId).pipe(takeUntil(this._onDestroy))
                .subscribe(mesta => this.kampMesta = mesta);
        }

        if (!this.cenik) {
            this.avtokampiService.getCeniki(this.campId).pipe(takeUntil(this._onDestroy))
                .subscribe(ceniki => this.cenik = ceniki[0]);
        }
    }

    onSelect(camp: Avtokamp, mesto: KampirnoMesto) {
        // {id: selectedId}
        this.userService.currentUser.subscribe(
            (userData) => {
                this.user = userData;
            }
        );

        if (!this.user.uporabnikId) {
            this.router.navigate(['auth', 'login']);
        } else {
            this.router.navigate(['reservations', camp.avtokampId, 'camping-pitches', mesto.kampirnoMestoId]);
        }
    }

    ngOnDestroy(): void {
        this._onDestroy.next();
        this._onDestroy.complete();
    }

    trackById(index, mesto) {
        return mesto.kampirnoMestoId;
    }

}

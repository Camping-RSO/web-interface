import { Component, OnInit } from '@angular/core';
import { AvtokampiService } from 'src/app/services';
import { Avtokamp } from 'src/app/models';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-special-offers-section',
    templateUrl: './special-offers-section.component.html',
    styleUrls: ['./special-offers-section.component.css']
})
export class SpecialOffersSectionComponent implements OnInit {
    camps: Observable<Avtokamp[]>;

    constructor(
        private avtokampiService: AvtokampiService
    ) { }

    ngOnInit() {
        this.camps = this.avtokampiService.getPaging(1, 5);
    }

    trackById(index, camp) {
        return camp.avtokampId;
    }

}

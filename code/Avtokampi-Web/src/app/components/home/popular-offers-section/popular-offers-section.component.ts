import { Component, OnInit } from '@angular/core';
import { Avtokamp } from '../../../models';
import { AvtokampiService } from '../../../services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-popular-offers-section',
  templateUrl: './popular-offers-section.component.html',
  styleUrls: ['./popular-offers-section.component.css']
})
export class PopularOffersSectionComponent implements OnInit {
    camps: Observable<Avtokamp[]>;

    constructor(
        private avtokampiService: AvtokampiService
    ) { }

    ngOnInit() {
        this.camps = this.avtokampiService.getPaging(4, 3);
    }

    trackById(index, camp) {
        return camp.avtokampId;
    }

}

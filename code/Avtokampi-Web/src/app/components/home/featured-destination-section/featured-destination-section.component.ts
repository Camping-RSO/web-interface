import { Component, OnInit, OnDestroy } from '@angular/core';
import { Avtokamp } from '../../../models';
import { AvtokampiService } from '../../../services';
import { Subject, Observable } from 'rxjs';

@Component({
    selector: 'app-featured-destination-section',
    templateUrl: './featured-destination-section.component.html',
    styleUrls: ['./featured-destination-section.component.css']
})
export class FeaturedDestinationSectionComponent implements OnInit {
    camps: Observable<Avtokamp[]>;

    constructor(
        private avtokampiService: AvtokampiService
    ) { }

    ngOnInit() {
        this.camps = this.avtokampiService.getPaging(2, 5);
    }

    trackById(index, camp) {
        return camp.avtokampId;
    }

}

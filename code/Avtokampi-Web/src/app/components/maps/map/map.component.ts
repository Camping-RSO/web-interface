import { Component, OnInit } from '@angular/core';
import { Avtokamp } from '../../../models';
import { AvtokampiService } from '../../../services';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
    camps: Observable<Avtokamp[]>;

    constructor(
        private avtokampiService: AvtokampiService
    ) { }

    ngOnInit() {
        this.camps = this.avtokampiService.getAll();
    }

    trackById(index, camp) {
        return camp.avtokampId;
    }

}

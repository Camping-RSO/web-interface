import { Avtokamp } from './../../../models';
import { Component, OnInit } from '@angular/core';
import { AvtokampiService } from '../../../services';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-camps-list',
    templateUrl: './camps-list.component.html',
    styleUrls: ['./camps-list.component.css']
})
export class CampsListComponent implements OnInit {
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

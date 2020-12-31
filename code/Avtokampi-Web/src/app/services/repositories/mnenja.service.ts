import { Injectable } from '@angular/core';
import { Response } from '../classes/apiresponse.class';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Mnenje } from '../../models';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class MnenjaService {

    constructor(
        private apiService: ApiService
    ) { }

    public get(mnenje_id: number): Observable<Mnenje[]> {
        return this.apiService.get(`/camping-opinions/api/mnenja/avtokamp/${mnenje_id}/mnenje`)
            .pipe(map(data => data));
    }

    public getMnenjaByAvtokamp(kamp_id: number): Observable<Mnenje[]> {
        return this.apiService.get(`/camping-opinions/api/mnenja/avtokamp/${kamp_id}/mnenja`)
            .pipe(map(data => data));
    }

    public getMnenjaByUser(user_id: number): Observable<Mnenje[]> {
        return this.apiService.get(`/camping-opinions/api/mnenja/${user_id}/mnenja`)
            .pipe(map(data => data));
    }

    public post(kamp_id: number, item: Mnenje): Observable<boolean> {
        return this.apiService.post(`/camping-opinions/api/mnenja/${kamp_id}/mnenje`, item)
            .pipe(map(data => data));
    }

    public put(mnenje_id: number, item: Mnenje): Observable<boolean> {
        return this.apiService.put(`/camping-opinions/api/mnenja/${mnenje_id}/mnenje`, item)
            .pipe(map(data => data));
    }

    public delete(mnenje_id: number): Observable<boolean> {
        return this.apiService.delete(`/camping-opinions/api/mnenja/${mnenje_id}/mnenje`)
            .pipe(map(data => data));
    }
}

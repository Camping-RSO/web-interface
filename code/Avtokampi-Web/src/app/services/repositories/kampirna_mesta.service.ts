import { Injectable } from '@angular/core';
import { Response } from '../classes/apiresponse.class';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { KampirnoMesto, Kategorija } from '../../models';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class KampirnaMestaService {

    constructor(
        private apiService: ApiService
    ) { }

    public get(kamp_mesto_id: number): Observable<KampirnoMesto> {
        return this.apiService.get(`/camping-overview/api/kampirnamesta/${kamp_mesto_id}`)
            .pipe(map(data => data));
    }

    public getByAvtokamp(kamp_id: number): Observable<KampirnoMesto[]> {
        return this.apiService.get(`/camping-overview/api/kampirnamesta/${kamp_id}/avtokamp`)
            .pipe(map(data => data));
    }

    public post(kamp_id: number, item: KampirnoMesto): Observable<boolean> {
        return this.apiService.post(`/camping-overview/api/kampirnamesta/${kamp_id}`, item)
            .pipe(map(data => data));
    }

    public delete(kamp_id: number, kamp_mesto_id: number): Observable<boolean> {
        return this.apiService.delete(`/camping-overview/api/kampirnamesta/${kamp_id}/${kamp_mesto_id}`)
            .pipe(map(data => data));
    }

    public put(kamp_id: number, kamp_mesto_id: number, item: KampirnoMesto): Observable<boolean> {
        return this.apiService.put(`/camping-overview/api/kampirnamesta/${kamp_id}/${kamp_mesto_id}`, item)
            .pipe(map(data => data));
    }

    public getKategorije(): Observable<Kategorija> {
        return this.apiService.get(`/api/camping-overview/api/kampirnamesta/kategorije`)
            .pipe(map(data => data));
    }
}

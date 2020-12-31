import { Injectable } from '@angular/core';
import { Avtokamp, Slika, Cenik, Regija, Drzava } from '../../models';
import { Response } from '../classes/apiresponse.class';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AvtokampiService {

    constructor(
        private apiService: ApiService
    ) { }

    public get(kamp_id: number): Observable<Avtokamp> {
        return this.apiService.get(`/camping-overview/api/avtokampi/${kamp_id}`)
            .pipe(map(data => data));
    }

    public getAll(): Observable<Avtokamp[]> {
        return this.apiService.get('/camping-overview/api/avtokampi')
            .pipe(map(data => data));
    }

    public getPaging(page: number, size: number): Observable<Avtokamp[]> {
        return this.apiService.get(`/camping-overview/api/avtokampi/Paging?PageNumber=${page}&PageSize=${size}`)
            .pipe(map(data => data));
    }

    public post(item: Avtokamp): Observable<boolean> {
        return this.apiService.post(`/camping-overview/api/avtokampi`, item)
            .pipe(map(data => data));
    }

    public delete(kamp_id: number): Observable<boolean> {
        return this.apiService.delete(`/camping-overview/api/avtokampi/${kamp_id}`)
            .pipe(map(data => data));
    }

    public put(kamp_id: number): Observable<boolean> {
        return this.apiService.put(`/camping-overview/api/avtokampi/${kamp_id}`)
            .pipe(map(data => data));
    }

    public getSlika(kamp_id: number): Observable<Slika> {
        return this.apiService.get(`/camping-images/slike/avtokamp/${kamp_id}`)
            .pipe(map(data => data));
    }

    public getSlike(kamp_id: number): Observable<Slika[]> {
        return this.apiService.get(`/camping-images/slike/avtokamp/slike/${kamp_id}`)
            .pipe(map(data => data));
    }

    public postSlika(slika_id: number, item: Slika): Observable<boolean> {
        return this.apiService.post(`/camping-images/slike/${slika_id}`, item)
            .pipe(map(data => data));
    }

    public putSlika(slika_id: number): Observable<boolean> {
        return this.apiService.put(`/camping-images/slike/${slika_id}`)
            .pipe(map(data => data));
    }

    public deleteSlika(slika_id: number): Observable<boolean> {
        return this.apiService.delete(`/camping-images/slike/${slika_id}`)
            .pipe(map(data => data));
    }

    public getCeniki(kamp_id: number): Observable<Cenik[]> {
        return this.apiService.get(`/camping-overview/api/avtokampi/${kamp_id}/ceniki`)
            .pipe(map(data => data));
    }

    public getCenik(cenik_id: number): Observable<Cenik> {
        return this.apiService.get(`/camping-overview/api/avtokampi/${cenik_id}/cenik`)
            .pipe(map(data => data));
    }

    public putCenik(cenik_id: number, item: Cenik): Observable<boolean> {
        return this.apiService.put(`/camping-overview/api/avtokampi/${cenik_id}/cenik`, item)
            .pipe(map(data => data));
    }

    public postCenik(kamp_id: number, item: Cenik): Observable<boolean> {
        return this.apiService.post(`/camping-overview/api/avtokampi/${kamp_id}/cenik`, item)
            .pipe(map(data => data));
    }

    public deleteCenik(cenik_id: number): Observable<boolean> {
        return this.apiService.delete(`/camping-overview/api/avtokampi/${cenik_id}/cenik`)
            .pipe(map(data => data));
    }

    public getRegije(): Observable<Regija[]> {
        return this.apiService.get('/camping-overview/api/avtokampi/regije')
            .pipe(map(data => data));
    }

    public getDrzave(): Observable<Drzava[]> {
        return this.apiService.get('/camping-overview/api/avtokampi/drzave')
            .pipe(map(data => data));
    }
}

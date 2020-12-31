interface RezervacijeMtrajanjeOdel {
    rezervacijaId: number;
    trajanje_od: Date;
    trajanje_do: Date;
    uporabnik: number;
    avtokamp: number;
    kampirno_mesto: number;
    vrsta_kampiranja: number;
    status_rezervacije: number;
}

export class Rezervacija implements RezervacijeMtrajanjeOdel {
    private _rezervacijaId: number;
    private _trajanjeOd: Date;
    private _trajanjeDo: Date;
    private _uporabnik: number;
    private _avtokamp: number;
    private _kampirnoMesto: number;
    private _vrstaKampiranja: number;
    private _statusRezervacije: number;

    get rezervacijaId(): number {
        return this._rezervacijaId;
    }

    set rezervacijaId(value: number) {
        this._rezervacijaId = value;
    }

    get trajanje_od(): Date {
        return this._trajanjeOd;
    }

    set trajanje_od(value: Date) {
        this._trajanjeOd = value;
    }

    get trajanje_do(): Date {
        return this._trajanjeDo;
    }

    set trajanje_do(value: Date) {
        this._trajanjeDo = value;
    }

    get uporabnik(): number {
        return this._uporabnik;
    }

    set uporabnik(value: number) {
        this._uporabnik = value;
    }

    get avtokamp(): number {
        return this._avtokamp;
    }

    set avtokamp(value: number) {
        this._avtokamp = value;
    }

    get kampirno_mesto(): number {
        return this._kampirnoMesto;
    }

    set kampirno_mesto(value: number) {
        this._kampirnoMesto = value;
    }

    get vrsta_kampiranja(): number {
        return this._vrstaKampiranja;
    }

    set vrsta_kampiranja(value: number) {
        this._vrstaKampiranja = value;
    }

    get status_rezervacije(): number {
        return this._statusRezervacije;
    }

    set status_rezervacije(value: number) {
        this._statusRezervacije = value;
    }
}

interface UporabnikInterface {
    uporabnikId: number;
    ime: string;
    priimek: string;
    slika: Blob;
    telefon: string;
    email: string;
}

export class Uporabnik implements UporabnikInterface {

    private _uporabnikId: number;
    private _ime: string;
    private _priimek: string;
    private _slika: Blob;
    private _telefon: string;
    private _email: string;

    constructor(uporabnikId: number, ime: string, priimek: string, slika: Blob, telefon: string, email: string) {
        this._uporabnikId = uporabnikId;
        this._ime = ime;
        this._priimek = priimek;
        this._slika = slika;
        this._telefon = telefon;
        this._email = email;
    }

    get uporabnikId(): number {
        return this._uporabnikId;
    }

    set uporabnikId(value: number) {
        this._uporabnikId = value;
    }

    get ime(): string {
        return this._ime;
    }

    set ime(value: string) {
        this._ime = value;
    }

    get priimek(): string {
        return this._priimek;
    }

    set priimek(value: string) {
        this._priimek = value;
    }

    get slika(): Blob {
        return this._slika;
    }

    set slika(value: Blob) {
        this._slika = value;
    }

    get telefon(): string {
        return this._telefon;
    }

    set telefon(value: string) {
        this._telefon = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }
}

export const uporabniki = [new Uporabnik(14, 'Nov', 'CEGU', null, '012821225', 'dabeu@cegu.com'),
    new Uporabnik(1, 'Don', 'CEGU', null, null, 'test@test.com'),
    new Uporabnik(6, 'Anze', 'Anze', null, '012821225', 'anze@gmail.com'),
    new Uporabnik(7, 'lala@lala.com', 'lala@lala.com', null, '012821225', 'lala@lala.com'),
    new Uporabnik(8, 'John', 'Doe', null, '012821225', 'john.doe@gmail.com'),
    new Uporabnik(13, 'CEGU NA', 'BETON', null, '012345678', 'test1@test.com'),
    new Uporabnik(12, 'Brale', 'Jede', null, '012821225', 'brale@jede.com'),
    new Uporabnik(2, 'Jane', 'Doe', null, '012821225', 'jane.doe@gmail.com')];






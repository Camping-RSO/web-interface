interface MnenjaModel {
    mnenjeId: number;
    mnenje: string;
    ocena: number;
    uporabnik: number;
    avtokamp: number;
}

export class Mnenje implements MnenjaModel {
    private _mnenjeId: number;
    private _mnenje: string;
    private _ocena: number;
    private _uporabnik: number;
    private _avtokamp: number;

    get mnenjeId(): number {
      return this._mnenjeId;
    }

    set mnenjeId(value: number) {
      this._mnenjeId = value;
    }

    get mnenje(): string {
      return this._mnenje;
    }

    set mnenje(value: string) {
      this._mnenje = value;
    }

    get ocena(): number {
      return this._ocena;
    }

    set ocena(value: number) {
      this._ocena = value;
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
}

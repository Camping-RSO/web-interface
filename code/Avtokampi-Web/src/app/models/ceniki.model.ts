interface CenikiModel {
    cenikId: number;
    naziv: string;
    cena: number;
    avtokamp: number;
}

export class Cenik implements CenikiModel {

    private _cenikId: number;
    private _naziv: string;
    private _cena: number;
    private _avtokamp: number;

    get cenikId(): number {
      return this._cenikId;
    }

    set cenikId(value: number) {
      this._cenikId = value;
    }

    get naziv(): string {
      return this._naziv;
    }

    set naziv(value: string) {
      this._naziv = value;
    }

    get cena(): number {
      return this._cena;
    }

    set cena(value: number) {
      this._cena = value;
    }

    get avtokamp(): number {
      return this._avtokamp;
    }

    set avtokamp(value: number) {
      this._avtokamp = value;
    }
}

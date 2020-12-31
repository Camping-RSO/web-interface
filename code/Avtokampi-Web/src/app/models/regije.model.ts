interface RegijeModel {
    regijaId: number;
    naziv: string;
    drzava: number;
}

export class Regija implements RegijeModel {
    private _regijaId: number;
    private _naziv: string;
    private _drzava: number;

    get regijaId(): number {
      return this._regijaId;
    }

    set regijaId(value: number) {
      this._regijaId = value;
    }

    get naziv(): string {
      return this._naziv;
    }

    set naziv(value: string) {
      this._naziv = value;
    }

    get drzava(): number {
      return this._drzava;
    }

    set drzava(value: number) {
      this._drzava = value;
    }
}

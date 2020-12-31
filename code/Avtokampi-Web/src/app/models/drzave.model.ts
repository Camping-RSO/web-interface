interface DrzaveModel {
    drzavaId: number;
    naziv: string;
}

export class Drzava implements DrzaveModel {
    private _drzavaId: number;
    private _naziv: string;

    get drzavaId(): number {
      return this._drzavaId;
    }

    set drzavaId(value: number) {
      this._drzavaId = value;
    }

    get naziv(): string {
      return this._naziv;
    }

    set naziv(value: string) {
      this._naziv = value;
    }
}

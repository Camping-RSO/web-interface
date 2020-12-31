interface KategorijeModel {
    kategorijaId: number;
    naziv: string;
}

export class Kategorija implements KategorijeModel {

    private _kategorijaId: number;
    private _naziv: string;

    get kategorijaId(): number {
      return this._kategorijaId;
    }

    set kategorijaId(value: number) {
      this._kategorijaId = value;
    }

    get naziv(): string {
      return this._naziv;
    }

    set naziv(value: string) {
      this._naziv = value;
    }
}

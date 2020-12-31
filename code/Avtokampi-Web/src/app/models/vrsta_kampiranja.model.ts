interface Vrsta_kampiranjaModel {
  vrstaKampiranjaId: number;
  naziv: string;
}

export class VrstaKampiranja implements Vrsta_kampiranjaModel {
    private _vrstaKampiranjaId: number;
    private _naziv: string;

    get vrstaKampiranjaId(): number {
      return this._vrstaKampiranjaId;
    }

    set vrstaKampiranjaId(value: number) {
      this._vrstaKampiranjaId = value;
    }

    get naziv(): string {
      return this._naziv;
    }

    set naziv(value: string) {
      this._naziv = value;
    }
}

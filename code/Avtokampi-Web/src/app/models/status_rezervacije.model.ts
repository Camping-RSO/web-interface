interface Status_rezervacijeModel {
    statusRezervacijeId: number;
    naziv: string;
}

export class StatusRezervacije implements Status_rezervacijeModel{
    private _statusRezervacijeId: number;
    private _naziv: string;

    get statusRezervacijeId(): number {
      return this._statusRezervacijeId;
    }

    set statusRezervacijeId(value: number) {
      this._statusRezervacijeId = value;
    }

    get naziv(): string {
      return this._naziv;
    }

    set naziv(value: string) {
      this._naziv = value;
    }
}

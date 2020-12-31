import {Url} from "url";

interface SlikeModel {
    slikaId: number;
    url: Url;
    avtokamp: number;
    created: Date;
}

export class Slika implements SlikeModel {
    private _slikaId: number;
    private _url: Url;
    private _avtokamp: number;
    private _created: Date;


    get created(): Date {
        return this._created;
    }

    set created(value: Date) {
        this._created = value;
    }

    get slikaId(): number {
        return this._slikaId;
    }

    set slikaId(value: number) {
        this._slikaId = value;
    }

    get url(): Url {
        return this._url;
    }

    set url(value: Url) {
        this._url = value;
    }

    get avtokamp(): number {
        return this._avtokamp;
    }

    set avtokamp(value: number) {
        this._avtokamp = value;
    }
}

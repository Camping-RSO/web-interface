interface IResponse {
    success: boolean;
    status_code: number;
    error_message: string;
    return_object: any;
}

export class Response implements IResponse {

    private _success: boolean;
    private _status_code: number;
    private _error_message: string;
    private _return_object: any;

    constructor(return_object: any, status_code: number) {
        this._return_object = return_object;
        this._status_code = status_code;

        if (this._status_code !== 0) {
            this._success = false;
            this._error_message = 'error';
        } else {
          this._success = true;
        }
    }

    get success(): boolean {
      return this._success;
    }

    get status_code(): number {
      return this._status_code;
    }

    get error_message(): string {
      return this._error_message;
    }

    get return_object(): any {
      return this._return_object;
    }
}

import { Response } from '../classes/apiresponse.class';

export interface IService {

    get(id: number): Response;
    post(item: any): Response;
    delete(id: number): Response;
    put(id: number): Response;
}

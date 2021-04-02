import {Interceptors} from '@/http/interceptors';
import { AxiosInstance } from 'axios';

export default class Http {
    public axios: AxiosInstance;
    public modal: any;

    constructor() {
        this.axios = new Interceptors().getInterceptors();
    }

    public get(url: string, params?: object, headers?: object): Promise<any> {
        return new Promise((resolve, reject) => {
            this.axios.get(url, {
                params: params,
                headers: headers,
            }).then((res) => {
                this.resultHandle(res, resolve, reject);
            }).catch((err) => {
                reject(err.message);
            });
        });
    }

    public post(url: string, data?: object, headers?: object): Promise<any> {
        return new Promise((resolve, reject) => {
            this.axios.post(url, data, {
                headers: headers,
            }).then((res) => {
                this.resultHandle(res, resolve, reject);
            }).catch((err) => {
                reject(err.message);
            });
        });
    }

    public resultHandle(res: any, resolve, reject): void {
        res.code >= 0 ? resolve(res.data) : reject(res)
    }

}
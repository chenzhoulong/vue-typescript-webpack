import http from '@/http'

export default class api {
    protected http: http
    protected instance: any
    constructor() {
        this.http = new http
    }
}
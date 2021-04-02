import axios, { AxiosInstance } from 'axios';

export class Interceptors {
    public instance: AxiosInstance;

    constructor() {
        // 创建axios实例
        this.instance = axios.create({timeout: 1000 * 12});

        // 初始化拦截器
        this.initInterceptors();
    }

    public getInterceptors() {
        return this.instance;
    }

    private initInterceptors() {
        this.instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        this.instance.interceptors.request.use(
            (config) => {
                return config;
            },
            (error) => {
                console.log(error);
            },
        );
        this.instance.interceptors.response.use(
            (res) => {
                if (true) {
                    return Promise.resolve(res.data);
                }
                return Promise.reject(res.data);
            },
            // 请求失败
            (error) => {
                const { response } = error;
                if (response) {
                    // 请求已发出，但是不在2xx的范围
                    Interceptors.errorHandle(response);
                } else {
                    console.log(error)
                }
                return Promise.reject(response.data);
            });
    }

    private static errorHandle(res: any) {
        switch (res.status) {
            case 401:
                break;
            case 403:
                break;
            case 404:
                console.log('请求的资源不存在');
                break;
            default:
                console.log('连接错误');
        }
    }
}
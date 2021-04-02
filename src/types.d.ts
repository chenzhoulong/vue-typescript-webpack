import http from "@/http";

declare module 'Vue/types/vue' {
    interface Vue {
        $http: http
    }
}
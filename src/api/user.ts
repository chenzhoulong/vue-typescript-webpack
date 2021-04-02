import api from './api'

class user extends api {
    public login(username: string, password: string) {
        return this.http.post('/user/login',{
            username,
            password
        })
    }
    public getPermission(role: string) {
        return this.http.get('/user/permission',{role})
    }
}

export default new user
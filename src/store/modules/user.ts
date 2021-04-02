import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import { getToken, setToken, removeToken } from '@/utils/cookies'
import store from '@/store'
import userApi from "@/api/user";

export interface IUserState {
    id?: number,
    username?: string,
    mail?: string,
    phone?: number | null,
    token?: string,
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
    public id = 0
    public username = ''
    public phone = 0
    public mail = ''
    public token = getToken() || ''

    @Mutation
    private SET_TOKEN(token: string) {
        this.token = token
    }

    @Mutation
    private SET_USERNAME(username: string) {
        this.username = username
    }

    @Mutation
    private SET_MAIL(mail: string) {
        this.mail = mail
    }

    @Mutation
    private SET_ID(id: number) {
        this.id = id
    }

    @Mutation
    private SET_PHONE(phone: number) {
        this.phone = phone
    }

    @Action
    public async login(userInfo: { username: string, password: string}) {
        let { username, password } = userInfo
        username = username.trim()
        // const { data } = await login({ username, password })
        // setToken(data.accessToken)
        // this.SET_TOKEN(data.accessToken)
        const data = await userApi.login(username, password)
        setToken(data.token)
        this.SET_TOKEN(data.token)
        this.SET_USERNAME(data.username)
        this.SET_MAIL(data.mail)
        this.SET_ID(data.id)
        this.SET_PHONE(data.phone)
    }

    @Action
    public resetToken() {
        removeToken()
        this.SET_TOKEN('')
    }

    @Action
    public async logOut() {
        removeToken()
        this.SET_TOKEN('')
    }
}

export const UserModule = getModule(User)
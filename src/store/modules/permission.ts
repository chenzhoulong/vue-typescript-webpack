import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import store from '@/store'
import userApi from "@/api/user";

export interface IUserState {
    router: Array<object>,
    username?: string,
    mail?: string,
    phone?: number | null,
    token?: string,
}

@Module({ dynamic: true, store, name: 'permission' })
class Permission extends VuexModule implements IUserState {
    public router = []
    public role = ''

    @Mutation
    private SET_ROUTERS(routes: []) {
        this.router = routes
    }

    @Mutation
    private SET_ROLES(role: string) {
        this.role = role
    }

    @Action
    public async getPermission(role: string) {
        const data = await userApi.getPermission(role)
        this.SET_ROUTERS(data.list)
        this.SET_ROLES(data.role)
    }

    @Action
    public clearPermission() {
        this.SET_ROUTERS([])
        this.SET_ROLES('')
    }

}

export const PermissionModule = getModule(Permission)
import { JsonRes } from '@/mock/interface'
import { Random } from 'mockjs'
import { getUrlParam } from '@/utils/common'

const users =[
    {
        id: 1,
        username: 'Admin',
        mail: 'admin@admin.com',
        phone: 17858954825,
        password: 'admin',
        token: Random.string(32),
    },
    {
        id: 2,
        username: 'Lukec',
        mail: 'luke@admin.com',
        phone: 17858954825,
        password: 'lukec',
        token: Random.string(32),
    },
]

const permissions =[
    {
        role: 'admin',
        list: [
            {
                path: '/', redirect: '/home'
            },
            {
                path: '/home',
                name: 'Home',
                icon: 'el-icon-s-home'
            },
            {
                path: '/demo',
                name: 'Demo',
                icon: 'el-icon-location',
                children:[
                    {
                        path: '/demo/helloWorld',
                        name: 'HelloWorld',
                        icon: 'el-icon-location',
                    },
                    {
                        path: '/demo/demo-1',
                        name: 'HelloWorld',
                        icon: 'el-icon-location',
                        children:[
                            {
                                path: '/demo/demo-1/demo-1-1',
                                name: 'Demo-1-1',
                                icon: 'el-icon-location',
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        role: 'editor',
        list: [
            {
                path: '/', redirect: '/home'
            },
            {
                path: '/home',
                name: 'Home',
                icon: 'el-icon-s-home'
            },
            {
                path: '/demo',
                name: 'Demo',
                icon: 'el-icon-location',
                children:[
                    {
                        path: '/demo/helloWorld',
                        name: 'HelloWorld',
                        icon: 'el-icon-location',
                    },
                    {
                        path: '/demo/demo-1',
                        name: 'HelloWorld',
                        icon: 'el-icon-location',
                        children:[
                            {
                                path: '/demo/demo-1/demo-1-1',
                                name: 'Demo-1-1',
                                icon: 'el-icon-location',
                            }
                        ]
                    }
                ]
            },
        ]
    },
]

export default {
    login: (options): JsonRes => {
        const data = JSON.parse(options.body)
        const res: JsonRes = {
            code: 0,
            data: {},
            message: 'success'
        }
        for (let i = 0; i < users.length; i++) {
            if (users[i].username == data.username && users[i].password == data.password) {
                res.data = users[i];
                break
            }
        }
        return res;
    },
    getPermission: (options): JsonRes => {
        const role = getUrlParam(options.url, 'role')
        const res: JsonRes = {
            code: 0,
            data: [],
            message: 'success'
        }
        for (let i = 0; i < permissions.length; i++) {
            if (permissions[i].role == role) {
                res.data = permissions[i];
                break
            }
        }
        return res;
    },
}
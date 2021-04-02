import Vue from 'vue'
import NProgress from "nprogress";
import 'nprogress/nprogress.css'
import Router from 'vue-router'
import { UserModule } from '@/store/modules/user'
import { PermissionModule } from '@/store/modules/permission'
import Main from '@/components/layout/Main.vue'

Vue.use(Router)

NProgress.configure({ showSpinner: false })

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/',
      name: 'Hone',
      component: () => import('@/components/layout/Wrapper.vue'),
      children: [
        {
          path: '/home',
          name: 'Home',
          component: () => import('@/components/HelloWorld.vue')
        },
        {
          path: '/demo',
          component: Main,
          name: 'Demo',
          children:[
            {
              path: '/demo/helloWorld',
              component: () => import('@/components/HelloWorld.vue')
            },
          ]
        },
      ]
    },
  ]
})

router.beforeEach(async (to, form, next) => {
  NProgress.start()
  if (UserModule.token) {
    if (to.path === '/login') {
      next({path: '/'})
      NProgress.done()
    } else {
      if (PermissionModule.router.length <= 0) {
        await PermissionModule.getPermission('admin')
        if (PermissionModule.router.length <= 0) {
          UserModule.resetToken()
          next({path: '/login'})
          NProgress.done()
        }
      }
      next()
    }
  } else if (to.path === '/login') {
    next()
  } else {
    next(`/login?redirect=${to.path}`)
    NProgress.done()
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router

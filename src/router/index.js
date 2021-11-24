import Vue from "vue"
import VueRouter from "vue-router"
import Store from "../store"
import { Routes, StorageKeys } from "../constants"
Vue.use(VueRouter)
const isAuthenticated = (to, from, next) => {
  if (Store.state.appToken.isAuthenticated) {
    if (Store.state.appToken.needRefresh) {
      localStorage.setItem(StorageKeys.REDIRECT_TO, to.name)
      next(Routes.PAGE_LOGIN_CALLBACK.path)
      return
    }
    next()
  } else {
    localStorage.setItem(StorageKeys.REDIRECT_TO, to.name)
    next(Routes.PAGE_LOGIN.path)
  }
}
const routes = [
  {
    path: Routes.REGISTRATION.path,
    name: Routes.REGISTRATION.name,
    component: () => import("../components/01-register/register.vue"),
    meta: { title: Routes.REGISTRATION.title }
  },
  {
    path: Routes.SUBMIT_EMPLOYEE.path,
    name: Routes.SUBMIT_EMPLOYEE.name,
    beforeEnter: isAuthenticated,
    component: () =>
      import("../components/03-corp-admin-panel/submit-employee.vue"),
    meta: { title: Routes.SUBMIT_EMPLOYEE.title }
  },
  {
    path: Routes.VIEW_APPLICATIONS.path,
    name: Routes.VIEW_APPLICATIONS.name,
    beforeEnter: isAuthenticated,
    component: () =>
      import("../components/03-corp-admin-panel/applications.vue"),
    meta: { title: Routes.VIEW_APPLICATIONS.title }
  },
  {
    path: Routes.APPROVE_CORPORATE_PROFILES.path,
    name: Routes.APPROVE_CORPORATE_PROFILES.name,
    beforeEnter: isAuthenticated,
    component: () =>
      import("../components/04-admin-panel/approve-corporate-profiles.vue"),
    meta: { title: Routes.APPROVE_CORPORATE_PROFILES.title }
  },
  {
    path: Routes.PAGE_LOGIN.path,
    name: Routes.PAGE_LOGIN.name,
    component: () => import("../components/02-login/login.vue"),
    meta: { title: Routes.PAGE_LOGIN.title }
  },
  {
    path: Routes.PAGE_LOGIN_CALLBACK.path,
    name: Routes.PAGE_LOGIN_CALLBACK.name,
    component: () => import("../components/02-login/login-callback.vue"),
    meta: { title: Routes.PAGE_LOGIN_CALLBACK.title }
  }
]
const router = new VueRouter({
  routes,
  mode: "history"
})
router.beforeEach((to, from, next) => {
  document.title = `enterSarawak - ${to.meta.title}`
  next()
})
export default router

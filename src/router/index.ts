import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import typescriptRouter from './typescript-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: 'typescript' }
  },
  ...typescriptRouter
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      const selector = document.querySelector(to.hash) as HTMLElement
      return {
        top: selector?.offsetTop,
        left: 0,
        behavior: 'auto',
      }
    }
  }
})
router.beforeEach((to, from, next) => {
  next()
})
export default router

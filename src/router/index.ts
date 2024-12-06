import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
import NProgress from "@/utils/progress";
import routes from './routes';
import { getLocalStorage } from '@/utils/storage'

const router = createRouter({
  history: createWebHistory(), //正式
  // history: createWebHistory('/Amway2025MEL'), //测试
  routes,
  scrollBehavior(to, from) {
    console.log("🚀 ~ scrollBehavior ~ to, from:", to, from)
    return { top: 0 };
  },
})

export interface toRouteType extends RouteLocationNormalized {
  meta: {
    title?: string;
    noCache?: boolean;
    auth?: Boolean
  };
}

router.beforeEach((to: toRouteType, from, next) => {
  console.log("🚀 ~ scrollBehavior ~ to, from:", to, from)
  NProgress.start();
  const token = getLocalStorage('anliMelToken');
  let auth = to.meta.auth

  // const title = to.meta.title;
  // if (title && title.trim() !== '') {
  //   document.title = title;
  // }


  if (auth) { // 需要登录
    if (token) {
      document.body.scrollTop = 0
      // firefox
      document.documentElement.scrollTop = 0
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    document.body.scrollTop = 0
    // firefox
    document.documentElement.scrollTop = 0
    next()
  }
});

router.afterEach(() => {
  NProgress.done();
});

export default router

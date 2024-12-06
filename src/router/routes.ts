import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    redirect: { name: "person" },
    // component: () => import(/* webpackChunkName: "home" */ '@/views/index.vue')
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '',
      keepAlive: true,
      auth: false
    },
  },
  {
    name: 'auth',
    path: '/auth',
    component: () => import('@/views/info-auth/index.vue'),
    meta: {
      title: '',
      keepAlive: true,
      auth: true
    },
  },
  {
    name: 'uploadCertificate',
    path: '/upload-certificate',
    component: () => import('@/views/upload-certificate/index.vue'),
    meta: {
      title: '',
      keepAlive: true,
      auth: true
    },
  },
  {
    name: 'pdfView',
    // path: '/pdf-view/:pdf_name',
    path: '/pdf-view',
    component: () => import('@/views/pdf-view/index.vue'),
    meta: {
      title: '',
      keepAlive: true,
      auth: false
    },
  },
  {
    name: 'person',
    path: '/person',
    component: () => import('@/views/person/index.vue'),
    meta: {
      title: '澳大利亚签证信息表-签证办理',
      keepAlive: false,
      auth: true
    },
  },
  {
    name: 'signature',
    path: '/signature',
    component: () => import('@/views/signature/index.vue'),
    meta: {
      title: '',
      keepAlive: false,
      auth: true
    },
  },
  {
    // 找不到路由重定向到主页
    path: '/:pathMatch(.*)',
    redirect: '/',
  },
];

export default routes;

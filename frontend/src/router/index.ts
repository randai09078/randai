import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { setupPageGuard } from './permission'
import { ChatLayout } from '@/views/chat/layout'
import { ResearchLayout } from '@/views/research/layout'
import { AdminLayout } from '@/views/admin/layout'

const routes: RouteRecordRaw[] = [
  {
    path: '/chat',
    name: 'Root',
    component: ChatLayout,
    redirect: '/chat',
    children: [
      {
        path: '/chat/:uuid?',
        name: 'Chat',
        component: () => import('@/views/chat/index.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },


  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    meta: { requiresAuth: false },
  },



  {
    path: '/policies/privacy-policy',
    name: 'privacy-policy',
    component: () => import('@/views/auth/PrivacyPolicy.vue'),
  },
  {
    path: '/policies/terms-of-use',
    name: 'terms-of-use',
    component: () => import('@/views/auth/TermsOfUse.vue'),
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/views/auth/index.vue'),
  },
  {
    path: '/auth/login',
    name: 'login',
    component: () => import('@/views/auth/Login.vue'),
  },

  {
    path: '/auth/signup',
    name: 'signup',
    component: () => import('@/views/auth/signUp.vue'),
  },
  {
    path: '/auth/otp',
    name: 'otp',
    component: () => import('@/views/auth/OTP.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminLayout,
    children: [
      {
        path: '/admin/models',
        name: 'adminModels',
        component: () => import('@/views/admin/models/index.vue'),
        // meta: { requiresAuth: true },
      },
      {
        path: '/admin/api',
        name: 'api',
        component: () => import('@/views/admin/api/index.vue'),
        // meta: { requiresAuth: true },
      },
      {
        path: '/admin/company',
        name: 'company',
        component: () => import('@/views/admin/company/index.vue'),
        // meta: { requiresAuth: true },
      },
    ],

  },
  // {
  //   path: '/cv',
  //   name: 'cv',
  //   component: () => import('@/views/cv/index.vue'),
  //   meta: { requiresAuth: true },
  // },

  // {
  //   path: '/cv',
  //   name: 'cv',
  //   component: AdminLayout,


  //   children: [
  //     {
  //       path: '/admin/',
  //       name: 'cvindex',
  //       component: () => import('@/views/cv/index.vue'),
  //      

  //     },

  //   ],

  // },
  {
    path: '/research',
    name: 'research',
    component: ResearchLayout,
    children: [
      {
        path: '/research/add-university',
        name: 'add-university',
        component: () => import('@/views/research/university/AddUniversity.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: '/research/university',
        name: 'university',
        component: () => import('@/views/research/university/ListUniversity.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: '/research/profile',
        name: 'profile',
        component: () => import('@/views/research/profile/index.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: '/research/gen-research',
        name: 'gen-research',
        component: () => import('@/views/research/research/index.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: '/research/major',
        name: 'major',
        component: () => import('@/views/research/major/ListMajor.vue'),
        meta: { requiresAuth: true },
      },
    ],

  },

  {
    path: '/404',
    name: '404',
    component: () => import('@/views/exception/404/index.vue'),
    meta: { requiresAuth: false },
  },

  {
    path: '/500',
    name: '500',
    component: () => import('@/views/exception/500/index.vue'),
    meta: { requiresAuth: false },
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    redirect: '/404',
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

setupPageGuard(router)

export async function setupRouter(app: App) {
  app.use(router)
  await router.isReady()
}

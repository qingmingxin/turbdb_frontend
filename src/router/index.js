

import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "",
          component: Home
        },
        {
          path: "/login",
          component: Login
        },
        {
          path: "/registe",
          component: () => import("@/views/Registe/index.vue"),
        },
        {
          path: "job",
          component: () => import("@/views/Job/index.vue"),
          // children:[
          //   {
          //     path: 'editor',
          //     component: () => import("@/views/Job/components/JobEditor.vue")
          //   },
          //   {
          //     path: 'history',
          //     component: () => import("@/views/Job/components/JobHistory.vue")
          //   },
          // ]
        },
        {
          path: "article",
          component: () => import("@/views/Article/index.vue"),
        },
        {
          path: "download",
          component: () => import("@/views/Download/index.vue"),
        },
        {
          path: "institute",
          component: () => import("@/views/Institute/index.vue"),
          children: [
            {
              path: 'nwpu',
              component: () => import("@/views/Institute/components/InstituteNWPU.vue")
            },
            {
              path: 'caaa',
              component: () => import("@/views/Institute/components/InstituteCAAA.vue")
            },
            {
              path: 'hit',
              component: () => import("@/views/Institute/components/InstituteHIT.vue")
            },
            {
              path: 'sjtu',
              component: () => import("@/views/Institute/components/InstituteSJTU.vue")
            },
            {
              path: 'zju',
              component: () => import("@/views/Institute/components/InstituteZJU.vue")
            },
          ]
        },
        {
          path:"database",
          component:() => import("@/views/Database/index.vue")
        }

      ]
    },
    
  ]
})

export default router
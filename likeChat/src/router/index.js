import Vue from 'vue'
import Router from 'vue-router'

const Login = () =>
  import ( /* webpackChunkName: "Login" */ '../view/login/login.vue')
const Frame = () =>
  import ( /* webpackChunkName: "Frame" */ '../view/frame.vue')
const Chat = () =>
  import ( /* webpackChunkName: "Chat" */ '../view/chat/chat.vue')

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'frame',
      component: Frame,
      children: [{
        path: '/chat',
        name: 'chat',
        component: Chat,
      }]
    }
  ]
})

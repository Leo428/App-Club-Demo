import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Email from '@/components/Email'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Router)
Vue.use(Element)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Email',
      component: Email
    }
  ]
})

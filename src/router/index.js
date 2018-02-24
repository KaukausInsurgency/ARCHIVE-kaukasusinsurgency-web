import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Servers from '@/components/Servers'
import Server from '@/components/Server'
import ServerOverview from '@/components/Server/Overview'
import ServerCampaign from '@/components/Server/Campaign'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'nav__link--active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { darkNav: false }
    },
    {
      path: '/servers',
      name: 'servers',
      component: Servers,
      meta: { darkNav: true }
    },
    {
      path: '/servers/:slug/',
      name: 'server',
      redirect: '/servers/:slug/overview',
      component: Server,
      meta: { darkNav: false },
      linkActiveClass: 'server-header__nav-link--active',
      children: [
        {
          path: 'overview',
          component: ServerOverview
        }
      ]
    },
    {
      path: '/servers/:slug/campaign',
      component: ServerCampaign,
      meta: { fullscreen: true }
    }
  ]
})

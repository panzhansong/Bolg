import Vue from 'vue'
import VueRouter from 'vue-router'
import PageView from '@/views/layout/PageView'
import { setTitle } from '@/util/util'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: '404',
    component: () => import('@/views/404/404')
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: PageView,
    children: [
      {
        path: '/',
        name: 'home',
        components: {
          default: () => import('@/views/home/Echarts')
        },
        meta: {
          title: '首页'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/user/Login'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/user/Register'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/system',
    name: 'system',
    component: PageView,
    meta: {
      title: '系统安全'
    },
    children: [
      {
        path: 'account',
        name: 'account',
        component: () => import('@/views/system/Account.vue'),
        meta: {
          title: '账号管理'
        }
      },
      {
        path: 'notice',
        name: 'notice',
        component: () => import('@/views/system/Notice.vue'),
        meta: {
          title: '系统公告'
        }
      },
      {
        path: 'menuMange',
        name: 'menuMange',
        component: () => import('@/views/system/MenuMange.vue'),
        meta: {
          title: '菜单管理'
        }
      }
    ]
  },
  {
    path: '/articleManage',
    name: 'articleManage',
    component: PageView,
    children: [
      {
        path: 'hot',
        name: 'hotArticle',
        component: () => import('@/views/article/HotArticle'),
        meta: {
          title: '热门文章'
        }
      },
      {
        path: 'myArticle',
        name: 'myArticle',
        component: () => import('@/views/article/MyArticle'),
        meta: {
          title: '我的文章'
        }
      },
      {
        path: 'pushApplication',
        name: 'pushApplication',
        component: () => import('@/views/article/PushApplication'),
        meta: {
          title: '文章发布申请'
        }
      },
      {
        path: 'pushRecordQuery',
        name: 'pushRecordQuery',
        component: () => import('@/views/article/PushRecordQuery'),
        meta: {
          title: '文章发布记录查询'
        }
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: PageView,
    children: [
      {
        path: 'list',
        component: () => import('@/views/user/UserList'),
        meta: {
          title: '用户列表'
        }
      }
    ]
  },
  {
    path: '/labelMange',
    name: 'labelMange',
    component: PageView,
    children: [
      {
        path: 'hot',
        component: () => import('@/views/labelMange/HotLabel'),
        meta: {
          title: '热门标签'
        }
      }
    ]
  },
  {
    path: '/projectMange',
    name: 'projectMange',
    component: PageView,
    children: [
      {
        path: 'list',
        component: () => import('@/views/projectMange/ProjectList'),
        meta: {
          title: '项目列表'
        }
      },
      {
        path: 'api',
        component: () => import('@/views/projectMange/ApiMange'),
        meta: {
          title: '接口管理'
        }
      }
    ]
  },
  {
    path: '/centerMange',
    name: 'centerMange',
    component: PageView,
    children: [
      {
        path: 'swiperConfig',
        component: () => import('@/views/centerMange/SwiperConfig'),
        meta: {
          title: '轮播图配置'
        }
      }
    ]
  },
  {
    path: '/activity',
    name: 'activity',
    component: PageView,
    children: [
      {
        path: 'seckill',
        component: () => import('@/views/activity/Seckill'),
        meta: {
          title: '秒杀'
        }
      },
      {
        path: 'rebate',
        component: () => import('@/views/activity/Rebate'),
        meta: {
          title: '满减促销'
        }
      },
      {
        path: 'group',
        component: () => import('@/views/activity/Group'),
        meta: {
          title: '套餐促销'
        }
      },
      {
        path: 'coupon',
        component: () => import('@/views/activity/Coupon'),
        meta: {
          title: '店铺优惠券'
        }
      },
      {
        path: 'siteCoupon',
        component: () => import('@/views/activity/SiteCoupon'),
        meta: {
          title: '平台优惠券'
        }
      },
      {
        path: 'invite',
        component: () => import('@/views/activity/Invite'),
        meta: {
          title: '邀请有礼'
        }
      }
    ]
  },
  {
    path: '/orderMange',
    name: 'orderMange',
    component: PageView,
    children: [
      {
        path: 'list',
        component: () => import('@/views/orderMange/OrderList'),
        meta: {
          title: '订单列表'
        }
      },
      {
        path: 'refundReview',
        component: () => import('@/views/orderMange/RefundReview'),
        meta: {
          title: '退货审核'
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  next()
})
export default router

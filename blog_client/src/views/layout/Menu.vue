<template>
  <div class="menu">
    <a-menu mode="inline" :openKeys="openKeys" @openChange="onOpenChange">
        <a-menu-item key="1">
          <router-link to='/home'><a-icon type="home" /><span>首页</span></router-link>
        </a-menu-item>
        <a-sub-menu key="sub1"><span slot="title"><a-icon type="safety-certificate" /><span>系统安全</span></span>
          <a-menu-item key="2">
            <router-link to='/system/account'>账号管理</router-link>
          </a-menu-item>
          <a-menu-item key="3">
            <router-link to='/system/notice'>系统公告</router-link>
          </a-menu-item>
          <a-menu-item key="4">
            <router-link to='/system/menuMange'>菜单管理</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="file-text" /><span>文章管理</span></span>
          <a-menu-item key="5">
            <router-link to='/articleManage/hot'>热门文章</router-link>
          </a-menu-item>
          <a-menu-item key="6">
            <router-link to='/articleManage/myArticle'>我的文章</router-link>
          </a-menu-item>
          <a-menu-item key="7">
            <router-link to='/articleManage/pushApplication'>文章发布申请</router-link>
          </a-menu-item>
          <a-menu-item key="8">
            <router-link to='/articleManage/pushRecordQuery'>文章发布记录查询</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <span slot="title"><a-icon type="team" /><span>用户管理</span></span>
          <a-menu-item key="9">
            <router-link to='/user/list'>用户列表</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub4">
          <span slot="title"><a-icon type="tags" /><span>标签管理</span></span>
          <a-menu-item key="10">
            <router-link to='/labelMange/hot'>热门标签</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub5">
          <span slot="title"><a-icon type="project" /><span>项目管理</span></span>
          <a-menu-item key="11"><router-link to='/projectMange/list'>项目列表</router-link></a-menu-item>
          <a-menu-item key="12"><router-link to='/projectMange/api'></router-link>接口管理</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub6">
          <span slot="title"><a-icon type="folder-open" /><span>内容管理</span></span>
          <a-menu-item key="13">
            <router-link to='/centerMange/swiperConfig'>首页轮播图配置</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub7">
          <span slot="title"><a-icon type="gift" /><span>活动管理</span></span>
          <a-menu-item key="14">
            <router-link to='/activity/seckill'>秒杀</router-link>
          </a-menu-item>
          <a-menu-item key="15">
            <router-link to='/activity/rebate'>满减促销</router-link>
          </a-menu-item>
          <a-menu-item key="16">
            <router-link to='/activity/group'>套餐促销</router-link>
          </a-menu-item>
          <a-menu-item key="17">
            <router-link to='/activity/coupon'>店铺优惠券</router-link>
          </a-menu-item>
          <a-menu-item key="18">
            <router-link to='/activity/siteCoupon'>平台优惠券</router-link>
          </a-menu-item>
          <a-menu-item key="19">
            <router-link to='/activity/invite'>邀请有礼</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub8">
          <span slot="title"><a-icon type="database" /><span>订单管理</span></span>
          <a-menu-item key="20">
            <router-link to='/orderMange/list'>订单列表</router-link>
          </a-menu-item>
          <a-menu-item key="21">
            <router-link to='/orderMange/refundReview'>退货审核</router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rootSubmenuKeys: ['sub1', 'sub2', 'sub3', 'sbu4', 'sub5', 'sub6', 'sub7', 'sub8'],
      openKeys: []
    }
  },
  methods: {
    onOpenChange (openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    }
  }
}
</script>

<style lang='less'>

</style>

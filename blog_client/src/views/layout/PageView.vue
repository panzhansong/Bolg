<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      :trigger="null"
      collapsible
      theme='light'
      v-model="collapsed"
      width='256px'
      class='shadow'>
      <div class="logo" >
        <img src="../../assets/images/logo.png" v-show="!collapsed">
        <img src="../../assets/images/m_logo.png" v-show="collapsed" >
      </div>
      <a-menu :collapsed='collapsed'></a-menu>
    </a-layout-sider>
    <a-layout>
      <a-header @toggle-collapsed = 'toggleCollapsed'></a-header>
      <a-breadcrumb></a-breadcrumb>
      <a-layout-content :style="{ padding: '24px', background: '#f0f2f5' }">
        <router-view></router-view>
      </a-layout-content>
      <a-footer></a-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import Menu from './Menu'
import Header from './Header'
import Breadcrumb from './Breadcrumb'
import Footer from './Footer'
export default {
  name: 'home',
  data () {
    return {
      collapsed: false,
      rootSubmenuKeys: ['sub1', 'sub2', 'sub3'],
      openKeys: []
    }
  },
  methods: {
    toggleCollapsed (collapsed) {
      this.collapsed = collapsed
    }
  },
  components: {
    AMenu: Menu,
    AHeader: Header,
    AFooter: Footer,
    ABreadcrumb: Breadcrumb
  }
}
</script>
<style lang='less' scoped>
#components-layout-demo-custom-trigger{
  height: 100vh;
    .shadow{
      box-shadow: 2px 0 6px rgba(0,21,41,.35);
      position: relative;
      z-index: 2;
    }
    .logo {
      margin: 16px;
        img{
          width:100%;
        }
    }

}

</style>

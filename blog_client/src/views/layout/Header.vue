<template>
  <div class="header">
      <a-layout-header style="background: #fff;" class="global_header">
        <div>
          <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="toggleCollapsed"
        />
        </div>
        <div class="global_avatar">
          <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" class="global_avatar" />
          <span class="global_header_nickname">超级管理员</span>
          <a-button type="link" icon='logout'>
            <router-link to="/login">退出登录</router-link>
          </a-button>
        </div>

      </a-layout-header>
  </div>
</template>

<script>
export default {

  data () {
    return {
      collapsed: false
    }
  },

  methods: {
    toggleCollapsed () {
      this.collapsed = !this.collapsed
      this.$emit('toggle-collapsed', this.collapsed)
    }
  }
}
</script>

<style lang='less' scoped>
.global_header{
  padding: 0 12px 0 0;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
  &:hover{
    color:#1890ff;
  }
}
.global_header_nickname{
  margin-right:30px;
  margin-left:10px;
}
</style>

<template>
  <div class="breadcrumb">
    <a-tabs hideAdd v-model="activeKey" type="editable-card" @edit="onEdit" @change="change"  class="global_tabs" v-if="showTabs">
        <a-tab-pane v-for="pane in panes" :tab="pane.title" :key="pane.key"></a-tab-pane>
    </a-tabs>
    <div class="refresh">
      <a-icon type="sync" style="color:#1890ff"/>
      <span style="color:#1890ff">刷新</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeKey: '0',
      panes: [],
      newTabIndex: 0
    }
  },
  created () {
    this.add(this.$route)
  },
  computed: {
    showTabs () {
      return this.panes.length > 0
    }
  },
  watch: {
    $route (newValue) {
      this.add(newValue)
    }
  },
  methods: {
    change (key) {
      const index = this.panes.findIndex(pane => pane.key === key.toString())
      const path = this.panes[index].path
      if (this.$route.fullPath === path) return false
      this.$router.push(path)
    },
    onEdit (targetKey, action) {
      this[action](targetKey)
    },
    remove (targetKey) {
      let activeKey = this.activeKey
      let lastIndex
      this.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1
        }
      })
      if (lastIndex === -1 && this.panes.length === 1) {
        this.$message.warn({
          content: '这是最后一页了,不能再关闭啦！',
          duration: 2
        })
        return false
      }
      let index = this.panes.findIndex(pane => pane.key === targetKey.toString())
      const panes = this.panes.filter(pane => pane.key !== targetKey)
      if (panes.length && activeKey === targetKey) {
        if (lastIndex >= 0) {
          activeKey = panes[lastIndex].key
        } else {
          activeKey = panes[0].key
        }
      }
      this.panes = panes
      this.activeKey = activeKey
      index = index ? index - 1 : 0
      const path = this.panes[index].path
      if (this.$route.fullPath === path) return false
      this.$router.push(path)
    },
    add (route) {
      let isExist = true
      let activeKey = null
      if (this.panes.length !== 0) {
        this.panes.forEach((item) => {
          if (item.path === route.fullPath) {
            isExist = false
            activeKey = item.key
            return false
          }
        })
      }
      if (isExist) {
        activeKey = (this.newTabIndex++).toString()
        this.panes.push({
          title: route.meta.title,
          path: route.fullPath,
          key: activeKey
        })
      }
      this.activeKey = activeKey
    }
  }
}
</script>
<style lang="less">
  .breadcrumb{
    padding: 24px 24px 0;
    position: relative;
    .global_tabs{
      width: calc(100% - 60px)
    }
    .refresh{
      position: absolute;
      right: 25px;
      top:40px;
      span{
          margin-left: 5px;
      }
    }
  }
</style>

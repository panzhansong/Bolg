<template>
  <div>  
    <a-table :columns="columns" :data-source="data" bordered :rowKey="row => row.userId">
      <template slot="title" >
        用户列表
      </template>
      <template slot="name" slot-scope="text">
        <a>{{ text }}</a>
      </template>
    </a-table>

  </div>
</template>

<script>
import axios from '@/util/server'
const columns = [
  {
    title: '用户名',
    dataIndex: 'userName',
    rowKey: 'userName',
    align:'center',
    scopedSlots: { customRender: 'userName' },
  },
  {
    title: '昵称',
    dataIndex: 'nickName',
    rowKey: 'nickName',
    align:'center',
    scopedSlots: { customRender: 'nickName' },
  },
  {
    title: '手机号',
    dataIndex: 'mobilePhone',
    rowKey: 'mobilePhone',
    align:'center',
    scopedSlots: { customRender: 'mobilePhone' },
  },
  {
    title: '操作',
    dataIndex: '',
    rowKey: '',
    align:'center',
    scopedSlots: { customRender: '删除' },
  },
]
export default {
  mounted () {
    this.$http.get('/api/queryUserList').then(res => {
      if ( res.data.status === 200 ) {
        this.data = res.data.data
      }
    })
  },
  data () {
    return {
      columns,
      data:[]
    }
  },

  methods: {}
}
</script>

<style lang='less'>

</style>

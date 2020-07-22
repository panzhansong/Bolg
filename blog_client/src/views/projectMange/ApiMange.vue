<template>
  <div>
    <div>
      <a-descriptions title="User Info">
        <a-descriptions-item label="UserName">
          Zhou Maomao
        </a-descriptions-item>
        <a-descriptions-item label="Telephone">
          1810000000
        </a-descriptions-item>
        <a-descriptions-item label="Live">
          Hangzhou, Zhejiang
        </a-descriptions-item>
        <a-descriptions-item label="Remark">
          empty
        </a-descriptions-item>
        <a-descriptions-item label="Address">
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </a-descriptions-item>
      </a-descriptions>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      apiList: [
        {
          apiName: '用户注册接口',
          apiPath: '/api/resgister'
        },
        {
          apiName: '用户登录接口',
          apiPath: '/api/login'
        }
      ]
    }
  },

  methods: {}
}
</script>

<style lang=''>

</style>

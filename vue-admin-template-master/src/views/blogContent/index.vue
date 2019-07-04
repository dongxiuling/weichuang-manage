<template>
  <div>
    <mavon-editor v-model="value" class="mavon-edi" />
    <div class="button">
      <el-button>提交</el-button>
      <el-button @click="goList">取消</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    goList() {
      this.$router.push('/blog/index')
    }
  }
}
</script>
<style lang="scss" scoped>
.mavon-edi{
  margin: 10px;
}
.button{
  width: 100%;
  margin: 10px;
}
button{
  margin-left: 42.5%;
}
</style>
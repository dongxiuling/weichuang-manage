<template>
  <div>
    <el-link type="primary" @click="gochange()">修改</el-link>
  </div>
</template>

<script>
export default {
  methods: {
    gochange() {
      this.$router.push('/userchange/index')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

<template>
  <div>
    <el-row type="flex" align="middle">
      <el-col :span="3">
        <span class="little-star">*</span>课程名称：
      </el-col>
      <el-col :span="19">
        <el-input v-model="input" placeholder="请输入脑图坐标" @blur="saveClass(input)" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>

</style>


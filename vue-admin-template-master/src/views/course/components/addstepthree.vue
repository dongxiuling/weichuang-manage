<template>
  <div class="addstepthree">
    <h3>课程目录:</h3>
    <el-row>
      <el-collapse v-if="flag" accordion value="1">
        <template>
          <step-three-content />
        </template>
      </el-collapse>
    </el-row>
    <el-row><el-button type="text" @click="show()">+&nbsp;新增一节</el-button></el-row>
  </div>

</template>
<script>
import stepThreeContent from './stepthreecontent'
export default {
  components: {
    stepThreeContent
  },
  data() {
    return {
      flag: false
    }
  },
  methods: {
    show() {
      this.flag = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>


<template>
  <div class="app-container">
    <el-steps :active="active" finish-status="success">
      <el-step title="课程概况" />
      <el-step title="课程详情" />
      <el-step title="教学内容" />
    </el-steps>

    <component :is="nowpage" />
    <el-button style="margin-top: 12px;" :disabled="flagpre" @click="prev">上一步</el-button>
    <el-button style="margin-top: 12px;" :disabled="flagnext" @click="next">下一步</el-button>
  </div>
</template>
<script>
import stepOne from '../components/addstepone.vue'
import stepTwo from '../components/addsteptwo.vue'
import stepThree from '../components/addstepthree.vue'
export default {
  components: {
    stepOne,
    stepTwo,
    stepThree
  },
  data() {
    return {
      active: 0,
      flagpre: true,
      flagnext: false,
      nowpage: 'stepOne'
    }
  },

  methods: {
    next() {
      this.flagpre = false
      if (this.active++ >= 2) {
        this.flagnext = true
      }
      switch (this.active) {
        case 0:
          this.nowpage = 'stepOne'
          break
        case 1:
          this.nowpage = 'stepTwo'
          break
        case 2:
          this.nowpage = 'stepThree'
          break
      }
    },
    prev() {
      this.flagnext = false
      if (this.active-- === 1) {
        this.flagpre = true
      }
      switch (this.active) {
        case 0:
          this.nowpage = 'stepOne'
          break
        case 1:
          this.nowpage = 'stepTwo'
          break
        case 2:
          this.nowpage = 'stepThree'
          break
      }
    }
  }
}
</script>

<style scoped>
</style>

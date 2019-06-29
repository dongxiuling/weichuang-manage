<template>
  <div class="app-container">
    <el-steps :active="active" finish-status="success">
      <el-step title="课程概况"></el-step>
      <el-step title="课程详情"></el-step>
      <el-step title="教学内容"></el-step>
    </el-steps>
    <!-- <step-one></step-one> -->
    <step-two></step-two>
    <!-- <component :is=""></component> -->
    <el-button style="margin-top: 12px;" @click="prev" :disabled="flagpre">上一步</el-button>
    <el-button style="margin-top: 12px;" @click="next" :disabled="flagnext">下一步</el-button>
  </div>
</template>
<script>
import stepOne from '../components/addstepone.vue';
import stepTwo from '../components/addsteptwo.vue';
export default {
  data() {
    return {
      active: 0,
      flagpre:true,
      flagnext:false
    };
  },

  methods: {
    next() {
        this.flagpre=false;
      if (this.active++ >= 2) {
          this.flagnext=true}
    },
    prev() {
        this.flagnext=false;
      if (this.active-- == 1) {
          this.flagpre=true;
      }
    }
  },
  components:{
      stepOne
  }
};
</script>
<style scoped>
</style>



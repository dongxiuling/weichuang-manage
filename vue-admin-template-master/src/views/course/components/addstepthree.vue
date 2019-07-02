<template>
  <div class="addstepthree">
    <h3>课程目录:</h3>
    <el-row>
      <el-collapse v-if="flag" accordion :value="num">
        <template v-for="n in num">
          <step-three-content :key="n" :stage-index="n" />
        </template>
      </el-collapse>
    </el-row>
    <el-row><el-button type="text" @click="show(classStage)">+&nbsp;新增一节</el-button></el-row>
  </div>

</template>
<script>
import stepThreeContent from './stepthreecontent'
export default {
  name: 'StepThree',
  components: {
    stepThreeContent
  },
  data() {
    return {
      flag: false,
      classStage: {
        classStateName: '',
        classVideoUrl: '',
        classTaskName: '',
        brain: {
          brainImg: '',
          brainPosition: [
            {}
          ]
        }
      }
    }
  },
  computed: {
    num() {
      return this.$store.getters.nowStageNum
    }
  },
  created() {
    if (this.num !== 0) {
      this.flag = true
    }
  },
  methods: {
    show(val) {
      this.flag = true
      this.$store.commit('course/ADD_STAGE', val)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>


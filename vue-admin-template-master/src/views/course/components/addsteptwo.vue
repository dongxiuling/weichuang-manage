<template>
  <mavon-editor v-model="value" class="mavon-edi" @input="saveDetail(value)" />
</template>
<script>
export default {
  name: 'StepTwo',
  data() {
    return {
      value: ''
    }
  },
  computed: {
    classInformation() {
      return this.$store.getters.classInformation
    }
  },
  created() {
    this.value = this.classInformation.classDetail
  },
  methods: {
    saveDetail(val) {
      this.$store.commit('course/MAP_CLASSDETAIL', val)
    }
  }
}
</script>
<style lang="scss" scoped>
.mavon-edi{
  margin-top: 50px;
}
</style>


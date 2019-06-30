<template>
  <mavon-editor v-model="value" class="mavon-edi" />
</template>
<script>
export default {
  name: 'StepTwo',
  data() {
    return {
      value: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.mavon-edi{
  margin-top: 50px;
}
</style>


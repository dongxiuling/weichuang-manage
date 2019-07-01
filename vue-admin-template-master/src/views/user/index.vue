<template>
  <div>
    <el-row>
      <el-col :span="1">
        <div class="grid-content bg-purple" />
      </el-col>
      <el-col :span="23">
        <div class="grid-content bg-purple-light">个人资料</div>
      </el-col>
    </el-row>
    <div class="demo-type">
      <!-- <div>
        <el-avatar icon="el-icon-user-solid" />
      </div> -->
    </div>
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item>
        <el-button type="primary" plain @click="gochange()">
          <i class="el-icon-edit">修改</i>
        </el-button>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <!-- <el-input v-model="ruleForm.name" /> -->
        {{ ruleForm.name }}
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <!-- <el-input v-model="ruleForm.phone" /> -->
        {{ ruleForm.phone }}
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <!-- <el-input v-model="ruleForm.email" /> -->
        {{ ruleForm.email }}
      </el-form-item>
      <el-form-item label="简介" prop="desc">
        <!-- <el-input v-model="ruleForm.desc" type="textarea" /> -->
        {{ ruleForm.phone }}
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: '',
      ruleForm: {
        name: '',
        phone: '',
        email: '',
        desc: ''
      }
    }
  },
  methods: {
    gochange() {
      this.$router.push('/userchange/index')
    }
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>

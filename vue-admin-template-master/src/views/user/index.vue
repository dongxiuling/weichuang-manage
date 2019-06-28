import 'element-ui/lib/theme-chalk/display.css';

<template>
  <div>
    <el-row>
      <el-col :span="1">
        <div class="grid-content bg-purple" />
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple-light">个人资料</div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple">
          <el-button type="primary" plain @click="gochange()">修改</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple" />
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-light">姓名</div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple">馒头</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple" />
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-light">电话</div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple">18566665144</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple" />
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-light">邮箱</div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple">591711447@qq.com</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple" />
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-light">简介</div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple">馒头是一只猫</div>
      </el-col>
    </el-row>
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

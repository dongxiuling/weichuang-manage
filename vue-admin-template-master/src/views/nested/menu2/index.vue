<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="20"><div class="grid-content"></div></el-col>
      <el-col :span="4"><router-link to="menu1"><el-button type="primary">创建课程</el-button></router-link></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="3"><div class="grid-content title">课程管理</div></el-col>
      <el-col :span="19"><div class="grid-content"></div></el-col>
    </el-row>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="收费课" name="first"><charge/></el-tab-pane>
      <el-tab-pane label="免费课" name="second"><free/></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import Charge from "@/components/Charge.vue";
  import Free from "@/components/Free.vue";

  export default {
     data() {
      return {
        activeName: 'second'
      };
    },
    components:{Free,Charge},
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      openCenter() {
        this.$message({
          message: '使用说明具体内容',
          center: true
        })
      }
    }
  }
</script>

<style scope>
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    min-height: 36px;
  }
  .title{
    font-size:20px;
  }
</style>
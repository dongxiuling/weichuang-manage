<template>
  <div class="grading-container">
    <el-form ref="form" :model="form" >
      <el-form-item label="阶段名称" class="item-top" label-width='70px'>
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </el-form>
    <el-transfer v-model="value" :data="data" class="transfer"></el-transfer>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item class="item-bottom">
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

  export default {
    data() {
       const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        form: {
          name: '',
        },
        data: generateData(),
        value: []
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style scoped>
    .item-top{
      position: absolute;
      left: 490px;
      top:80px;
    }
    .el-transfer{
      position: absolute;
      left:50%;
      top:50%;
      transform: translate(-50%,-50%);
    }
    .el-input{
      width: 425px;
    }
    .item-bottom{
      position: absolute;
      left: 540px;
      bottom:55px
    }
    
</style>


<template>
  <div class="app-container">
    <!-- <el-form ref="form" :model="fetchData" label-width="120px"> -->
    <el-form ref="form" label-width="120px">
      <el-form-item label="阶段名称">
        <el-input v-model="stepsName" />
      </el-form-item>
      <el-form-item label="本阶段课程">
        <!-- <div class="steps-container">
          <el-select v-model="steps" placeholder="请选择本阶段应包含的课程" class="course-list">
            <el-option v-for="(obj,index) in list" :key="index" :label="区域一" value="shanghai" />
          </el-select>
          <el-button type="primary" plain @click="addStepsCourse">添加</el-button>
        </div> -->
        <el-transfer
          v-model="value"
          filterable
          :filter-method="filterMethod"
          filter-placeholder="请输入课程名"
          :data="data" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">创建</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { fetchList } from '@/api/course-stage'
export default {
  data() {
    const generateData = _ => {
      // generateData是备选列表；
      const data = []
      const courses = ['课程1', '2', '3', '4', '5', '6', '7']
      const spell = ['课程1', '2', '3', '4', '5', '6', '7']
      courses.forEach((course, index) => {
        data.push({
          label: course,
          key: index,
          spell: spell[index]
        })
      })
      return data
    }
    return {
      stepsName: '',
      data: generateData(),
      value: [],
      filterMethod(query, item) {
        return item.spell.indexOf(query) > -1
      }
    }
  },
  methods: {
    onSubmit() {
      // 提交数据到后台并重置页面；
      // console.log(this.filterMethod())
      this.$router.push('/grading/index')
      // 上一行应为重置页面
      this.$message('submit!')
      // 编程式导航:
    },
    onCancel() {
      // 取消已编辑的信息，重置页面；
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
    // fetchData() {
    //   // 获取来的列表信息；
    //   fetchList().then(response => {
    //     this.list = response.data.items
    //   })
    // }
  }
}
</script>

<style scoped>
.line {
  text-align: center;
}
</style>


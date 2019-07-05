<template>
  <div class="app-container">
    <el-form ref="form" :model="fetchList" label-width="120px">
    <!-- <el-form ref="form" label-width="120px"> -->
      <el-form-item label="阶段名称">
        <el-input v-model="steps.name" />
      </el-form-item>
      <el-form-item label="本阶段课程">
        <el-transfer
          v-model="steps.value"
          filterable
          :filter-method="filterMethod"
          filter-placeholder="请输入课程名"
          :data="steps.data" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">创建</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { fetchList } from '@/api/grading'
export default {
  data() {
    var steps = {}
    var fetchList = InitializationData()
    // const list = []
    const generateData = _ => {
      // 生成备选列表；
      const list = []
      const courses = ['课程1', '2', '3', '4', '5', '6', '7']
      const spell = ['课程1', '2', '3', '4', '5', '6', '7']
      courses.forEach((course, index) => {
        list.push({
          label: course,
          key: index,
          spell: spell[index]
        })
      })
      return list
    }
    return {
      steps: {
        name: '',
        data: generateData(),
        value: []
      },
      filterMethod(query, item) {
        return item.spell.indexOf(query) > -1
      }
    }
  },
  methods: {
    onSubmit() {
      // 提交数据到后台并重置页面；
      this.$router.push({ path: '/grading' })
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
    },
    InitializationData() {
      // 获取来的列表信息；
      Vue.axios.get(api).then((response) => {
        console.log(response.data)
      })
    },
    created(){
      this.$axios({
        method:'post',
        url:'api',
        data:this.qs.stringify({    //这里是发送给后台的数据
        userId:this.userId,
        token:this.token,
        })
      }).then((response) =>{          
        console.log(response)       //请求成功返回的数据
      }).catch((error) =>{
        console.log(error)       //请求失败返回的数据
      })
    }
  }
}
</script>

<style scoped>
.line {
  text-align: center;
}
</style>


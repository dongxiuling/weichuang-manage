<template>
  <div>
    <el-table class="each" :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="注册日期" sortable width="200" />
      <el-table-column prop="name" label="姓名" width="100" />
      <el-table-column prop="sex" label="性别" width="100" />
      <el-table-column prop="city" label="城市" width="100" />
      <el-table-column prop="school" label="学校" width="100" />
      <el-table-column prop="major" label="专业" width="100" />
      <el-table-column prop="signature" label="个性签名" width="500" />
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      tableData: []
    }
  },
  created() {
    axios.get('https://www.easy-mock.com/mock/5cea353446a5bf3b03eed106/example/mock1')
      .then((result) => {
        console.log(result.data.data.projects)
        this.tableData = result.data.data.projects
      })
  },
  methods: {
    formatter(row, column) {
      return row.address
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
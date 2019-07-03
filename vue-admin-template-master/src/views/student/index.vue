<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="注册日期" sortable width="200" />
      <el-table-column prop="name" label="姓名" width="100" />
      <el-table-column prop="sex" label="性别" width="100" />
      <el-table-column prop="city" label="城市" width="100" />
      <el-table-column prop="school" label="学校" width="100" />
      <el-table-column prop="major" label="专业" width="100" />
      <el-table-column prop="signature" label="个性签名" width="300" />
      <el-table-column prop="change" label="编辑" width="200">
        <el-row>
          <el-button type="primary">修改</el-button>
          <el-button type="warning" @click="del(date)">删除</el-button>
        </el-row>
      </el-table-column>
    </el-table>
    <el-row>
      <input v-model="date" type="text">
      <input v-model="name" type="text">
      <input v-model="school" type="text">
      <el-button type="success" @click="add()">添加</el-button>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      tableData: [],
      date: '',
      name: '',
      school: ''
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
    },
    add() {
      this.tableData.push({
        date: this.date,
        name: this.name,
        school: this.school
      })
    },
    del(date) {
      this.tableData.splice(date, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
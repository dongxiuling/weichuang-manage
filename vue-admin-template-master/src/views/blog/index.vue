<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="发表日期" sortable width="200" />
      <el-table-column
        prop="classify"
        label="分类"
        width="100"
        :filters="[{ text: '前端', value: '前端' }, { text: '后端', value: '后端' }]"
        :filter-method="filterHandler"
      />
      <el-table-column prop="title" label="标题" width="100" />
      <el-table-column prop="content" label="内容" width="300" />
      <el-table-column prop="author" label="作者" width="100" />
      <el-table-column prop="reading" label="阅读" width="100" />
      <el-table-column prop="comments" label="评论" width="100" />
      <el-table-column prop="praise" label="点赞" width="100" />
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
    axios.get('https://www.easy-mock.com/mock/5cea353446a5bf3b03eed106/example/mock2')
      .then((result) => {
        console.log(result.data.data.projects)
        this.tableData = result.data.data.projects
      })
  },
  methods: {
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === value
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
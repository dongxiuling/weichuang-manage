<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="发表日期" sortable width="150" />
      <el-table-column
        prop="classify"
        label="分类"
        width="100"
        :filters="[{ text: '前端', value: '前端' }, { text: '后端', value: '后端' }]"
        :filter-method="filterHandler"
      />
      <el-table-column prop="title" label="标题" width="100" />
      <el-table-column prop="content" label="内容" width="500" />
      <el-table-column prop="author" label="作者" width="100" />
      <el-table-column prop="reading" label="阅读" width="100" />
      <el-table-column prop="comments" label="评论" width="100" />
      <el-table-column prop="praise" label="点赞" width="100" />
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2019-01-01',
          classify: '前端',
          title: '1',
          content: '22',
          author: '张三',
          reading: '99',
          comments: '99',
          praise: '99'
        },
        {
          date: '2019-01-02',
          classify: '后端',
          title: '1',
          content: '22',
          author: '张三',
          reading: '99',
          comments: '99',
          praise: '99'
        },
        {
          date: '2019-01-03',
          classify: '前端',
          title: '1',
          content: '22',
          author: '张三',
          reading: '99',
          comments: '99',
          praise: '99'
        }
      ]
    }
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
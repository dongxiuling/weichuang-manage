<template>
  <div>
    <el-table class="each" :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="注册日期" sortable width="150" />
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
export default {
  data() {
    return {
      tableData: [
        {
          date: '2019-01-01',
          name: '张三',
          sex: '男',
          city: '哈尔滨',
          school: '黑龙江大学',
          major: '信息工程',
          signature: '...'
        },
        {
          date: '2019-01-02',
          name: '李四',
          sex: '男',
          city: '哈尔滨',
          school: '黑龙江大学',
          major: '信息工程',
          signature: '...'
        },
        {
          date: '2019-01-03',
          name: '王五',
          sex: '男',
          city: '哈尔滨',
          school: '黑龙江大学',
          major: '信息工程',
          signature: '...'
        }
      ]
    }
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
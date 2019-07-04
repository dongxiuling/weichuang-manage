<template>
  <el-table
    :data="tableData.filter(data => !this.$store.state.user.search ||
     data.name.toLowerCase().includes(this.$store.state.user.search.toLowerCase()))"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    
    >
    <el-table-column
      prop="name"
      label="课程信息"
      width="180"
      v-model="this.$store.state.user.value1"> 
    </el-table-column>
    <el-table-column
      prop="date"
      label="创建时间"
      sortable
      width="180"
      v-model="this.$store.state.user.search">
    </el-table-column>
    <el-table-column
      prop="closingData"
      label="截止日期"
      sortable
      width="180">
    </el-table-column> 
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click.native.prevent="handleEdit(scope.row)">修改</el-button>
        <el-button slot="reference" size="mini" type="danger"
          @click.native.prevent="handleDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    props:['tableData','num'],
    methods: {
      handleEdit(row) {
        this.$parent.handleEdit(row);
      },
      handleDelete(row) {
        this.$parent.handleDelete(row);
      }
    }
  }
</script>
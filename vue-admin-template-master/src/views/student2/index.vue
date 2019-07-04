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
          <el-button type="primary" @click="dialogFormVisible = true">修改</el-button>
          <el-button type="warning" @click="del(date)">删除</el-button>
        </el-row>
      </el-table-column>
    </el-table>
    <el-button type="text" @click="dialogFormVisible = true">添加</el-button>
    <!-- 跳转 -->
    <el-dialog title="学生信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <!-- <el-form-item prop="date" label="日期" :label-width="formLabelWidth">
          <el-input v-model="form.date" autocomplete="off" />
        </el-form-item> -->
        <el-form-item prop="name" label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-input v-model="form.sex" autocomplete="off" />
        </el-form-item>
        <el-form-item label="城市" :label-width="formLabelWidth">
          <el-input v-model="form.city" autocomplete="off" />
        </el-form-item>
        <el-form-item label="学校" :label-width="formLabelWidth">
          <el-input v-model="form.school" autocomplete="off" />
        </el-form-item>
        <el-form-item label="专业" :label-width="formLabelWidth">
          <el-input v-model="form.major" autocomplete="off" />
        </el-form-item>
        <el-form-item label="个性签名" :label-width="formLabelWidth">
          <el-input v-model="form.signature" autocomplete="off" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false,add()">确 定</el-button>
        <!-- <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button> -->
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      tableData: [],
      form: {
        date: '',
        name: '',
        sex: '',
        city: '',
        school: '',
        major: '',
        signature: ''
      },
      dialogFormVisible: false,
      formLabelWidth: '120px',
      date: '',
      name: '',
      sex: '',
      city: '',
      school: '',
      major: '',
      signature: ''
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
        date: Date(),
        name: this.form.name,
        sex: this.form.sex,
        city: this.form.city,
        school: this.form.school,
        major: this.form.major,
        signature: this.form.signature
      })
      this.form.name = ''
      this.form.sex = ''
      this.form.city = ''
      this.form.school = ''
      this.form.major = ''
      this.form.signature = ''
    },
    del(date) {
      this.tableData.splice(date, 1)
    }
    // fn(name) {
    //   console.log(name)
    //   this.tableData.name = name
    // }
  }
}
</script>

<style lang="scss" scoped>
</style>
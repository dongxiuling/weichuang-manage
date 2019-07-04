<template>
  <div>
    <!-- 添加 -->
    <el-button type="text" @click="dialogFormVisible = true">添加</el-button>
    <el-dialog title="学生信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
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
    <!-- 表单 -->
    <!-- <el-table :data="tableData" v-for="(item,index) in tableData" :key = index stripe style="width: 100%">
      <el-table-column prop="id" label="编号" sortable width="100" />
      <el-table-column prop="date" label="注册日期" sortable width="200" />
      <el-table-column prop="name" label="姓名" width="100" />
      <el-table-column prop="sex" label="性别" width="100" />
      <el-table-column prop="city" label="城市" width="100" />
      <el-table-column prop="school" label="学校" width="100" />
      <el-table-column prop="major" label="专业" width="100" />
      <el-table-column prop="signature" label="个性签名" width="300" />
      <el-table-column prop="change" label="编辑" width="200">
        <el-row>
          <el-button type="primary" @click="dialogFormVisible = true,change(index)">修改</el-button>
          <el-button type="warning" @click="del(index)">删除</el-button>
        </el-row>
      </el-table-column>
    </el-table> -->
    <table cellpadding="0" cellspacing="0">
			<thead>
				<tr>
					<th>序号</th>
					<th>姓名</th>
					<th>性别</th>
					<th>城市</th>
					<th>学校</th>
          <th>专业</th>
					<th>个性签名</th>
					<th>操作</th>
				</tr>
			</thead>
				<tbody>
					<tr v-for="(item,index) in tableData" :key = index>
						<td width="10%">{{index+1}}</td>
						<td>{{ item.name }}</td>
						<td width="10%">{{ item.sex }}</td>
						<td width="10%">{{ item.city }}</td>
            <td width="10%">{{ item.sex }}</td>
            <td width="10%">{{ item.school }}</td>
            <td width="10%">{{ item.major }}</td>
            <td width="10%">{{ item.signature }}</td>
						<el-row>
              <el-button type="primary" @click="dialogFormVisible = true,change(item)">修改</el-button>
              <el-button type="warning" @click="del(index)">删除</el-button>
            </el-row>
					</tr>
			</tbody>
    </table>
    <!-- 修改 -->
    <el-dialog title="学生信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item prop="name" label="姓名" :label-width="formLabelWidth">
          <el-input v-model="edit.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-input v-model="edit.sex" autocomplete="off" />
        </el-form-item>
        <el-form-item label="城市" :label-width="formLabelWidth">
          <el-input v-model="edit.city" autocomplete="off" />
        </el-form-item>
        <el-form-item label="学校" :label-width="formLabelWidth">
          <el-input v-model="edit.school" autocomplete="off" />
        </el-form-item>
        <el-form-item label="专业" :label-width="formLabelWidth">
          <el-input v-model="edit.major" autocomplete="off" />
        </el-form-item>
        <el-form-item label="个性签名" :label-width="formLabelWidth">
          <el-input v-model="edit.signature" autocomplete="off" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">更 新</el-button>
        <!-- <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button> -->
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data() {
    return {
      form: {},
      dialogFormVisible: false,
      edit: {},
      // tableData: [],
      tableData: [{
        id: '1',
        date: '2019.01.01',
        name: 'mt',
        sex: 'nv',
        city: 'hlj',
        school: 'hd',
        major: 'xx',
        signature: 'lalala'
      },
      {
        id: '2',
        date: '2019.01.08',
        name: 'mt',
        sex: 'nv',
        city: 'hlj',
        school: 'hd',
        major: 'xx',
        signature: 'lalala'
      },
      {
        id: '3',
        date: '2019.01.05',
        name: 'mt',
        sex: 'nv',
        city: 'hlj',
        school: 'hd',
        major: 'xx',
        signature: 'lalala'
      }],
      formLabelWidth: '120px',
      editid: ''
      // id: '',
      // date: '',
      // name: '',
      // sex: '',
      // city: '',
      // school: '',
      // major: '',
      // signature: ''
    }
  },
  // created() {
  //   axios.get('https://www.easy-mock.com/mock/5cea353446a5bf3b03eed106/example/mock1')
  //     .then((result) => {
  //       console.log(result.data.data.projects)
  //       this.tableData = result.data.data.projects
  //     })
  // },
  methods: {
    formatter(row, column) {
      return row.address
    },
    add() {
      this.tableData.push({
        id: Math.floor(Math.random() * 1000000 + 1),
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
    del(index) {
      this.tableData.splice(index, 1)
      // id = 'id'
    },
    change(item) {
      console.log(item)
      this.edit = {
        id: item.id,
        name: item.name,
        sex: item.sex,
        city: item.city,
        school: item.school,
        major: item.major,
        signature: item.signature
      }
      this.edit = true
      this.editid = item.id
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
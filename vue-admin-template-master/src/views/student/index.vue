<template>
  <div>
    <!-- 添加 -->
    <div class="add">
      <!-- <el-input placeholder="请输入内容" v-model="input" :disabled="true" size="mini"> </el-input> -->
      <input v-model="addDetail.name" type="text" placeholder="姓名">
      <input v-model="addDetail.sex" type="text" placeholder="性别">
      <input v-model="addDetail.city" type="text" placeholder="城市">
      <input v-model="addDetail.school" type="text" placeholder="学校">
      <input v-model="addDetail.major" type="text" placeholder="专业">
      <input v-model="addDetail.signature" type="text" placeholder="个性签名">
      <el-button type="primary" plain @click="adddetail">添加</el-button>
    </div>
    <!-- 表单 -->
    <el-table :data="newsList" class="table" style="width: 100%">
      <el-table-column prop="index" label="序号" align="center" width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.$index+1 }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" align="center" width="100" />
      <el-table-column prop="sex" label="性别" align="center" width="100" />
      <el-table-column prop="city" label="城市" align="center" width="200" />
      <el-table-column prop="school" label="学校" align="center" width="100" />
      <el-table-column prop="major" label="专业" align="center" width="100" />
      <el-table-column prop="signature" label="个性签名" align="center" width="300" />
      <el-table-column label="编辑" align="center" width="200">
        <template slot-scope="scope">
          <el-button type="success" plain @click="dialogFormVisible = true,handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-button type="danger" plain @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 修改 -->
    <el-dialog v-if="dialogFormVisible" title="学生信息" :visible.sync="dialogFormVisible">
      <el-form ref="form" :model="editDetail" label-width="100px">
        <el-form-item label="姓名:">
          <el-input v-model="editDetail.name" type="text" placeholder="姓名" />
        </el-form-item>
        <el-form-item label="性别:">
          <el-input v-model="editDetail.sex" type="text" placeholder="性别" />
        </el-form-item>
        <el-form-item label="城市:">
          <el-input v-model="editDetail.city" type="text" placeholder="城市" />
        </el-form-item>
        <el-form-item label="学校:">
          <el-input v-model="editDetail.school" type="text" placeholder="学校" />
        </el-form-item>
        <el-form-item label="专业:">
          <el-input v-model="editDetail.major" type="text" placeholder="专业" />
        </el-form-item>
        <el-form-item label="个性签名:">
          <el-input v-model="editDetail.signature" type="text" placeholder="个性签名" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="update">确定</el-button>
        <el-button @click="dialogFormVisible = false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      newsList: [],
      addDetail: {},
      editDetail: {},
      editid: '',
      dialogFormVisible: false
    }
  },
  created() {
    axios
      .get(
        'https://www.easy-mock.com/mock/5cea353446a5bf3b03eed106/example/mock1'
      )
      .then(result => {
        console.log(result.data.data.projects)
        this.newsList = result.data.data.projects
      })
  },
  methods: {
    // 添加
    adddetail() {
      this.newsList.push({
        name: this.addDetail.name,
        sex: this.addDetail.sex,
        city: this.addDetail.city,
        school: this.addDetail.school,
        major: this.addDetail.major,
        signature: this.addDetail.signature,
        id: Math.floor(Math.random() * 1000000 + 1)
      })
      this.addDetail.name =  ''
      this.addDetail.sex = ''
      this.addDetail.city = ''
      this.addDetail.school = ''
      this.addDetail.major = ''
      this.addDetail.signature = ''
    },
    // 删除
    handleDelete(index, row) {
      this.newsList.splice(index, 1)
    },
    // 编辑
    handleEdit(index, item) {
      console.log(item)
      this.editDetail = {
        name: item.name,
        sex: item.sex,
        city: item.city,
        school: item.school,
        major: item.major,
        signature: item.signature,
        id: item.id
      }
      this.editlist = true
      this.editid = item.id
    },
    // 确认更新
    update() {
      const _this = this
      for (let i = 0; i < _this.newsList.length; i++) {
        if (_this.newsList[i].id === this.editid) {
          _this.newsList[i] = {
            name: _this.editDetail.name,
            sex: _this.editDetail.sex,
            city: _this.editDetail.city,
            school: _this.editDetail.school,
            major: _this.editDetail.major,
            signature: _this.editDetail.signature,
            id: this.editid
          }
          this.dialogFormVisible = false
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  margin: 10px;
}
.add input {
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  width: 150px;
  height: 40px;
  line-height: 40px;
  padding: 10px;
  margin: 10px 0px 10px 10px;
}
.add button {
  margin-left: 10px;
}
</style>

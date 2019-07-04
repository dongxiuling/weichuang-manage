<template>
  <div>
    <!-- 添加 -->
    <tr class="add">
      <input v-model="addDetail.name" type="text" placeholder="姓名">
      <input v-model="addDetail.sex" type="text" placeholder="性别">
      <input v-model="addDetail.city" type="text" placeholder="城市">
      <input v-model="addDetail.school" type="text" placeholder="学校">
      <input v-model="addDetail.major" type="text" placeholder="专业">
      <input v-model="addDetail.signature" type="text" placeholder="个性签名">
      <el-button type="primary" plain @click="adddetail">新增</el-button>
    </tr>
    <!-- 表单 -->
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
          <th>编辑</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in newsList" :key="index">
          <td width="5%">{{ index+1 }}</td>
          <td width="10%">{{ item.name }}</td>
          <td width="10%">{{ item.sex }}</td>
          <td width="10%">{{ item.city }}</td>
          <td width="10%">{{ item.school }}</td>
          <td width="10%">{{ item.major }}</td>
          <td width="10%">{{ item.signature }}</td>
          <td width="15%">
            <el-button type="success" plain @click="dialogFormVisible = true,edit(item)">修改</el-button>
            <el-button type="danger" plain @click="deletelist(item.id,index)">删除</el-button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 修改 -->
    <el-dialog v-if="dialogFormVisible" title="学生信息" :visible.sync="dialogFormVisible">
      <el-form :model="editDetail" ref="form" label-width="100px">
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
    // 新增
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
    },
    // 删除
    deletelist(id, i) {
      this.newsList.splice(i, 1)
    },
    // 编辑
    edit(item) {
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
      this.dialogFormVisible = true
      this.editid = item.id
    },
    // 确认更新
    update() {
      let _this = this
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
table {
  width: 100%;
  padding: 10px;
}
table thead th {
  font-size: 14px;
  color: #909399;
  border-bottom: 1px solid #ebeef5;
  text-align: center;
  padding: 10px;
}
table tbody td {
  font-size: 14px;
  color: #606266;
  border-bottom: 1px solid #ebeef5;
  text-align: center;
  padding: 10px;
}
.add input {
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  height: 40px;
  line-height: 40px;
  padding: 10px;
  margin: 10px 0px 10px 10px;
}
.add button {
  margin-left: 10px;
}
</style>
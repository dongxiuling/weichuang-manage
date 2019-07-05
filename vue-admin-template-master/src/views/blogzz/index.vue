<template>
  <div>
    <!-- 添加 -->
    <tr class="add">
      <input v-model="addDetail.classify" type="text" placeholder="分类">
      <input v-model="addDetail.author" type="text" placeholder="作者">
      <input v-model="addDetail.title" type="text" placeholder="标题">
      <input v-model="addDetail.content" type="text" placeholder="内容">
      <!-- <input v-model="addDetail.reading" type="text" placeholder="阅读">
      <input v-model="addDetail.comments" type="text" placeholder="评论">
      <input v-model="addDetail.praise" type="text" placeholder="点赞"> -->
      <el-button type="primary" plain @click="adddetail">新增</el-button>
    </tr>
    <!-- 表单 -->
    <el-table :data="newsList" class="table" style="width: 100%">
      <el-table-column prop="index" label="序号" align="center" width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.$index+1 }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="发表日期" align="center" width="150" />
      <el-table-column prop="classify" label="分类" align="center" width="100" />
      <el-table-column prop="author" label="作者" align="center" width="100" />
      <el-table-column prop="title" label="标题" align="center" width="100" />
      <el-table-column prop="content" label="内容" align="center" width="200" />
      <el-table-column prop="reading" sortable label="阅读" align="center" width="100" />
      <el-table-column prop="comments" sortable label="评论" align="center" width="100" />
      <el-table-column prop="praise" sortable label="点赞" align="center" width="200" />
      <el-table-column label="编辑" align="center" width="200">
        <template slot-scope="scope">
          <el-button type="success" plain @click="dialogFormVisible = true,handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-button type="danger" plain @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 修改 -->
    <el-dialog v-if="dialogFormVisible" title="文章信息" :visible.sync="dialogFormVisible">
      <el-form ref="form" :model="editDetail" label-width="50px">
        <el-form-item label="分类:">
          <el-input v-model="editDetail.classify" type="text" placeholder="分类" />
        </el-form-item>
        <el-form-item label="作者:">
          <el-input v-model="editDetail.author" type="text" placeholder="作者" />
        </el-form-item>
        <el-form-item label="标题:">
          <el-input v-model="editDetail.title" type="text" placeholder="标题" />
        </el-form-item>
        <mavon-editor v-model="editDetail.content" type="text" placeholder="内容" />
        <!-- <el-form-item label="阅读">
          <el-input v-model="editDetail.reading" type="text" placeholder="阅读" />
        </el-form-item>
        <el-form-item label="评论">
          <el-input v-model="editDetail.comments" type="text" placeholder="评论" />
        </el-form-item>
        <el-form-item label="点赞">
          <el-input v-model="editDetail.praise" type="text" placeholder="点赞" />
        </el-form-item> -->
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
        'https://www.easy-mock.com/mock/5cea353446a5bf3b03eed106/example/mock2'
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
        date: Date(),
        classify: this.addDetail.classify,
        author: this.addDetail.author,
        title: this.addDetail.title,
        content: this.addDetail.content,
        reading: this.addDetail.reading,
        comments: this.addDetail.comments,
        praise: this.addDetail.praise,
        id: Math.floor(Math.random() * 1000000 + 1)
      })
    },
    // 删除
    handleDelete(index, row) {
      this.newsList.splice(index, 1)
    },
    // 编辑
    handleEdit(index, item) {
      console.log(item)
      this.editDetail = {
        date: Date(),
        classify: item.classify,
        author: item.author,
        title: item.title,
        content: item.content,
        reading: item.reading,
        comments: item.comments,
        praise: item.praise,
        id: item.id
      }
      this.dialogFormVisible = true
      this.editid = item.id
    },
    // 确认更新
    update() {
      const _this = this
      for (let i = 0; i < _this.newsList.length; i++) {
        if (_this.newsList[i].id === this.editid) {
          _this.newsList[i] = {
            date: _this.editDetail.date,
            classify: _this.editDetail.classify,
            author: _this.editDetail.author,
            title: _this.editDetail.title,
            content: _this.editDetail.content,
            reading: _this.editDetail.reading,
            comments: _this.editDetail.comments,
            praise: _this.editDetail.praise,
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
  height: 40px;
  line-height: 40px;
  padding: 10px;
  margin: 10px 0px 10px 10px;
}
.add button {
  margin-left: 10px;
}
</style>

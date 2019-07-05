<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <!-- 首页 -->
      <el-tab-pane name="first">
        <el-button type="primary" plain @click="activeName = 'second'" class="add">添加文章</el-button>
        <el-table :data="newsList" class="table" style="width: 100%">
          <el-table-column prop="index" label="序号" align="center" width="100">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.$index+1 }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="date" label="发表日期" align="center" width="100" />
          <el-table-column prop="classify" label="分类" align="center" width="100" />
          <el-table-column prop="author" label="作者" align="center" width="100" />
          <el-table-column prop="title" label="标题" align="center" width="100" />
          <el-table-column prop="content" label="内容" align="center" width="200" />
          <el-table-column prop="reading" sortable label="阅读" align="center" width="100" />
          <el-table-column prop="comments" sortable label="评论" align="center" width="100" />
          <el-table-column prop="praise" sortable label="点赞" align="center" width="100" />
          <el-table-column label="编辑" align="center" width="200">
            <template slot-scope="scope">
              <el-button
                type="success"
                plain
                @click="dialogFormVisible = true,handleEdit(scope.$index, scope.row)"
              >修改</el-button>
              <el-button type="danger" plain @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <!-- 添加 -->
      <el-tab-pane name="second">
        <el-form ref="form" :model="addDetail" label-width="50px">
          <el-form-item label="分类:">
            <el-select v-model="addDetail.classify" filterable placeholder="请选择分类">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <!-- <el-input v-model="addDetail.classify" type="text" placeholder="分类" /> -->
          </el-form-item>
          <el-form-item label="作者:">
            <el-input v-model="addDetail.author" type="text" placeholder="作者" />
          </el-form-item>
          <el-form-item label="标题:">
            <el-input v-model="addDetail.title" type="text" placeholder="标题" />
          </el-form-item>
          <mavon-editor v-model="addDetail.content" type="text" placeholder="内容" />
        </el-form>
        <div class="button">
          <el-button @click="adddetail">确定</el-button>
          <el-button @click="activeName = 'first'">取消</el-button>
        </div>
      </el-tab-pane>
      <!-- 编辑 -->
      <el-tab-pane name="third">
        <el-form ref="form" :model="editDetail" label-width="50px">
          <el-form-item label="分类:">
            <el-select v-model="editDetail.classify" filterable placeholder="请选择分类">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="作者:">
            <el-input v-model="editDetail.author" type="text" placeholder="作者" />
          </el-form-item>
          <el-form-item label="标题:">
            <el-input v-model="editDetail.title" type="text" placeholder="标题" />
          </el-form-item>
          <mavon-editor v-model="editDetail.content" type="text" placeholder="内容" />
        </el-form>
        <div class="button">
          <el-button @click="update">确定</el-button>
          <el-button @click="activeName = 'first'">取消</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
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
      activeName: 'first',
      options: [
        {
          value: '前端',
          label: '前端'
        },
        {
          value: '后端',
          label: '后端'
        }
      ]
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
    handleClick(tab, event) {
      console.log(tab, event)
    },
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
      this.addDetail.classify =  ''
      this.addDetail.author = ''
      this.addDetail.title = ''
      this.addDetail.content = ''
      this.activeName = 'first'
    },
    handleDelete(index, row) {
      this.newsList.splice(index, 1)
    },
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
      this.activeName = 'third'
      this.editid = item.id
    },
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
          this.activeName = 'first'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.add {
  margin: 0 10px;
}
table {
  margin: 10px;
}
form {
  margin: 40px;
}
.button {
  text-align: center;
}
</style>

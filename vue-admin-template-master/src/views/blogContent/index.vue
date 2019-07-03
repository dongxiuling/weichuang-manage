<template>
  <div>
    <el-row :gutter="24">
      <el-col :span="18" :offset="3">
        <div class="grid-content bg-purple">
          <div class="blog">
            <h1 class="blogTitle">文章2</h1>
            <div>
              <span>2019.01.01</span>
              <span class="blogRead">阅读 1000</span>
            </div>
            <div class="blogContent">为了便于阅读</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="18" :offset="3">
        <div class="grid-content bg-purple">
          <div class="blog">
            <h3 class="blogTitle">评论</h3>
            <el-input placeholder="写下你的评论"></el-input>
            <el-button>评论</el-button>
            <ul>
              <li>
                <div>张三</div>
                <div>评论内容</div>
                <div>1小时前</div>
              </li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {}
}
</script>

<style lang="scss" scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
// 布局
.el-row {
    margin: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
.el-col {
  border-radius: 4px;
}
.bg-purple {
  background: #f9fafc;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
// blog
.blog{
  padding: 20px;
}
.blogRead{
  margin: 20px;
}
.blogContent {
  padding: 20px;
}
</style>
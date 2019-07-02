<template>
  <div>
    <div class="BlogTitle">
      <h1>文章2</h1>
      <div class="BlogStat">
        <span class="admin">
          <i class="el-icon-edit" />
          <i class="el-icon-share" />
          <i class="el-icon-delete" />
        </span>
      </div>
      <el-badge :value="9" class="item">
        <el-button size="small">阅读</el-button>
      </el-badge>
      <el-badge :value="6" class="item">
        <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge :value="3" class="item">
        <el-button size="small">点赞</el-button>
      </el-badge>
    </div>
    <div class="BlogContent">文章内容</div>
    <div class="BlogLinks">
      <ul>
        <li>
          上篇
          <span>(1小时前)</span>：
          <a href="">文章1</a>
        </li>
        <li>
          下篇
          <span>(2小时前)</span>：
          <a href="">文章3</a>
        </li>
      </ul>
    </div>
    <div class="BlogComments">
      <h2>评论</h2>
      <ul>
        <li>
          <div class="portrait">
            <a href="#">
              <img src="" />
            </a>
          </div>
          <div class="body">
            <div class="title">张三 发表于 2019-01-01 00:00</div>
            <div class="post">赞</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="CommentForm">
      <el-input placeholder="评论内容"></el-input>
      <el-button>发表评论</el-button>
    </div>
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
.BlogTitle {
  padding: 5px 0 5px 10px;
  margin: 0 0 20px 0;
  background: #f2f2f2;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.BlogContent {
  padding: 0 10px;
}
.BlogComments {
  margin: 20px 0 0 0;
}
.BlogComments h2 {
  background: #f2f2f2;
  font-size: 10pt;
  padding: 3px 5px;
}
.BlogComments h2 .opts {
  float: right;
}
.BlogComments ul {
  margin: 10px 0 0 0;
}
.BlogComments ul li {
  margin: 0 0 20px 0;
}
.BlogComments ul li .portrait {
  float: left;
  width: 50px;
}
.BlogComments ul li .portrait img {
  width: 32px;
  height: 32px;
  padding: 2px;
  background: #fff;
}
.BlogComments ul li .body {
  float: left;
  width: 600px;
}
.BlogComments ul li .body .title {
  color: #666;
  font-size: 9pt;
}
.BlogComments ul li .body .post {
  margin: 10px 0 0 0;
  color: #00a;
}
.BlogComments ul li .body .post div.ref {
  border: 1px solid #ddd;
  margin: 0 0 10px 0;
  padding: 2px;
  font-size: 9pt;
  background: #fffec8;
}
.BlogComments ul li .body .post div.ref h4 {
  margin: 0;
  padding: 1px 3px;
  background: #cc9966;
  color: #fff;
  font-size: 10pt;
}
.BlogComments ul li .body .post div.ref p {
  margin: 0;
  padding: 2px;
  line-height: 20px;
  color: #666;
  font-size: 9pt;
}

.BlogComments .pager li {
  margin: 0 0 0 2px;
}
</style>
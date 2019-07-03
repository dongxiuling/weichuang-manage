<template>
  <div class="blog">
    <div class="BlogTitle">
      <h1>文章2</h1>
      <div>
        <span>2019.01.01</span>
        <span>阅读 1000</span>
      </div>
      <div class="BlogContent">为了便于阅读</div>
    </div>
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
      <h3>评论</h3>
      <el-input placeholder="评论内容"></el-input>
      <el-button>评论</el-button>
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
  padding: 10px;
}
.BlogComments {
  margin: 20px 0 0 0;
}
.BlogComments h2 {
  background: #f2f2f2;
  // font-size: 10pt;
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
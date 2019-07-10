<template>
  <div>
    <div class="addstepthree">
      <h3>课程阶段:</h3>
      <el-row>
        <el-collapse :value="this.list.length">
          <template v-for="(item,index) in list">
            <el-collapse-item :key="index" :name="index+1" class="grading-title">
              <template slot="title">
                <el-col :span="10">
                  <span class="inner-title">第{{ index+1 }}阶段:&nbsp;&nbsp;{{ item.name }}</span>
                </el-col>
              </template>
              <el-row type="flex" align="middle">
                <el-col :span="3">
                  <span class="little-star">*</span>阶段名称：
                </el-col>
                <el-col :span="6">
                  <el-input v-model="item.stagename" placeholder="请输入阶段名称" />
                </el-col>
              </el-row>
              <el-row type="flex" align="middle">
                <el-col :span="3">
                  <span class="little-star">*</span>课程名称：
                </el-col>
                <el-col :span="6">
                  <el-select v-model="item.valueitem" multiple placeholder="请选择" class="select-input">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
              </el-row>

              <el-row type="flex" align="middle">
                <el-col :span="3">
                  <span class="little-star">*</span>价格：
                </el-col>
                <el-col :span="6">
                  <el-input v-model="item.price" placeholder="请输入价格" />
                </el-col>
              </el-row>
            </el-collapse-item>
          </template>
        </el-collapse>
      </el-row>
      <el-row v-show="isshow">
        <el-col :span="3" class="all-total">
          总价格：
        </el-col>
        <el-col :span="6">
          <el-input placeholder="请输入总价格" v-model="totalprice" class="total-input" />
        </el-col>
      </el-row>
      <el-row><el-button type="text" @click="show(pushobj)">+&nbsp;新增阶段</el-button></el-row>
      <el-row v-show="isshow"><el-button type="primary" class="grading-button" v-on:click='jiage()'>保存</el-button></el-row>
    </div>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          isshow:false,
          pushobj: { // 每次点击新增一节推进去的空对象用于循环
            name: '',
            stagename: '',
            price:'',
            valueitem: []
          },
          options: [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
          valueitem: [],
          list:[],
          totalprice:'',
          totallist:{}
        }
      },
    methods: {
      show(pushobj) {
        this.isshow=true;
        var cloneobj = JSON.parse(JSON.stringify(this.pushobj));
        this.list.push({...this.cloneobj},);
      },
      jiage(){
        this.totallist.list=this.list;
        this.totallist.totalprice=this.totalprice;
      }
    }  
  }
</script>

<style lang="scss" scoped>
  .little-star{
    color: red;
  }
  .el-col.el-col-3{
    font-size: 16px
  }
  .el-row {
    margin-bottom: 20px;
    margin-left:10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .inner-title{
    text-indent: 5px;
    font-size: 16px;
    font-weight: bolder;
  }
  .el-collapse-item.grading-title{
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }
  .select-input{
    width: 100%;
  }
  .grading-button{
    margin-left: 50%;
    margin-bottom: 20px;
  }
  .all-total{
    margin-top: 13px;
    margin-left: 10px;
  }
  .total-input{
    width: 100%;
  }
</style>

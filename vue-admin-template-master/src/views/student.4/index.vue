<template>
  <div>
    <!-- 添加 -->
    <div class="add">
      <el-input type="text" v-model="addDetail.title" name="title" value placeholder="标题" />
      <el-input type="text" v-model="addDetail.user" name="user" value placeholder="发布人" />
      <el-input type="date" v-model="addDetail.dates" name="date" value placeholder="发布时间" />
      <el-button type="primary" plain @click="adddetail">新增</el-button>
    </div>
    <!-- 表单 -->
     <el-table :data="newsList" style="width: 100%">
      <el-table-column label="序号" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.$index+1 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="标题" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.user }}</span>
        </template>
      </el-table-column>
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.dates }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="change" label="操作" width="200">
        <el-row>
          <el-button type="success" plain class="edit" @click="dialogFormVisible = true,edit(index)">编辑</el-button>
          <el-button type="danger" plain @click="deletelist(id, index)" class="delete">删除</el-button>
        </el-row>
      </el-table-column>
    </el-table>
    <table cellpadding="0" cellspacing="0">
      <thead>
        <tr>
          <th>序号</th>
          <th>标题</th>
          <th>发布人</th>
          <th>发布时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in newsList" :key = index>
          <td width="5%">{{index+1}}</td>
          <td>{{item.title}}</td>
          <td width="10%">{{item.user}}</td>
          <td width="15%">{{item.dates}}</td>
          <td width="10%">
            <el-button type="danger" plain @click="deletelist(item.id,index)" class="delete">删除</el-button>
            <el-button type="success" plain class="edit" @click="dialogFormVisible = true,edit(item)">编辑</el-button>
          </td>
          <el-divider></el-divider>
        </tr>
      </tbody>
    </table>
    <!-- 修改 -->
    <el-dialog title="学生信息" :visible.sync="dialogFormVisible" v-if="editlist">
      <el-form :model="editDetail">
        <el-input v-model="editDetail.title" type="text" name="title" value placeholder="标题" />
        <el-input v-model="editDetail.user" type="text" name="user" value placeholder="发布人" />
        <el-input v-model="editDetail.dates" type="date" name="date" value placeholder="发布时间" />
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="update">更新</el-button>
        <el-button @click="editlist=false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addDetail: {},
      editlist: false,
      dialogFormVisible: false,
      editDetail: {},
      newsList: [
        {
          title: '在移动设备开发',
          user: '张若昀',
          dates: '2018-02-09',
          id: '45211546'
        },
        {
          title: '图形及特效特性',
          user: '张若昀',
          dates: '2018-02-09',
          id: '61341341'
        },
        {
          title: '特效特性',
          user: '张若昀',
          dates: '2018-02-09',
          id: '61341541'
        },
        {
          title: '图形特性',
          user: '张若昀',
          dates: '2018-02-09',
          id: '61347741'
        }],
      editid: '',
      id: '',
      index: '',
    }
  },
  mounted() {},
  methods: {
    // 新增
    adddetail() {
      // 这里的思路应该是把this.addDetail传给服务端，然后加载列表this.newsList
      // this.newsList.push(this.addDetail)
      this.newsList.push({
        title: this.addDetail.title,
        user: this.addDetail.user,
        dates: this.addDetail.dates,
        id: Math.floor(Math.random() * 1000000 + 1)
      })
      // axios.post('url',this.addDetail).then((res) =>{
      // 若返回正确结果，清空新增输入框的数据
      // this.addDetail.title = ""
      // this.addDetail.user = ""
      // this.addDetail.dates = ""
      // })
    },
    // 删除
    deletelist(id, i) {
      this.newsList.splice(i, 1)
      // 这边可以传id给服务端进行删除  ID = id
      // axios.get('url',{ID:id}).then((res) =>{
      //			加载列表
      // })
    },
    // 编辑
    edit(item) {
      console.log(item)
      this.editDetail = {
        title: item.title,
        user: item.user,
        dates: item.dates,
        id: item.id
      }
      this.editlist = true
      this.editid = item.id
    },
    // 确认更新
    update() {
      // 编辑的话，也是传id去服务端
      // axios.get('url',{ID:id}).then((res) =>{
      //			 加载列表
      // })
      let _this = this
      for (let i = 0; i < _this.newsList.length; i++) {
        if (_this.newsList[i].id === this.editid) {
          _this.newsList[i] = {
            title: _this.editDetail.title,
            user: _this.editDetail.user,
            dates: _this.editDetail.dates,
            id: this.editid
          }
          this.editlist = false
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
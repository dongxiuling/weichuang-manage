<template>
    <div>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="课程名称" v-model="input" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="searchHandel(input)"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-select v-model="value1" @change=" getAdmissions(value1)" placeholder="课程状态">
            <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="4">
          <el-select
            v-model="value2"
            style="margin-left: 20px;"
            @change=" getFull(value2)"
            placeholder="招生状态">
            <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="2">
          <div style="hight:40px;">
            <el-checkbox v-model="checked">我的授课</el-checkbox>
          </div>
        </el-col>
        <el-col :span="6"></el-col>
      </el-row>   
    </div>
</template>

<style>
  .input-with-select{
    background-color: #fff;
  }
</style>

<script>
export default {
  data() {
    return {
      input:'',
      value1: [],
      value2: [],
      checked: false,
    }
  },
  props:['options1','options2'],
  methods: {
    searchHandel(value){
      this.$store.commit('user/searchHandel',value);
      this.input = ""
    },
    getAdmissions(value){
      this.$parent.getAdmissions(value);
    },
    getFull(value){
      this.$parent.getFull(value);
    }
  }
}
</script>
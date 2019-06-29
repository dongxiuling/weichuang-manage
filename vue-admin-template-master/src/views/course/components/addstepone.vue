<template>
  <div class="stepone-container">
    <el-row type="flex" align="middle">
      <el-col :span="3">
        <span class="little-star">*</span>课程名称：
      </el-col>
      <el-col :span="19">
        <el-input v-model="input" placeholder="请输入课程名称"></el-input>
      </el-col>
    </el-row>
    <el-row type="flex" align="top">
      <el-col :span="3">
        <span class="little-star">*</span>课程封面：
      </el-col>
      <el-col :span="19">
        <el-upload action="#" list-type="picture-card" :auto-upload="false">
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{file}">
            <img class="el-upload-list__item-thumbnail" :src="file.url" alt>
            <span class="el-upload-list__item-actions">
              <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                <i class="el-icon-zoom-in"></i>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleDownload(file)"
              >
                <i class="el-icon-download"></i>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
              >
                <i class="el-icon-delete"></i>
              </span>
            </span>
          </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt>
        </el-dialog>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="3">
        <span class="little-star">*</span>课程简介：
      </el-col>
      <el-col :span="19">
        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
      </el-col>
    </el-row>
    <el-row type="flex" align="middle">
      <el-col :span="3">
        <span>课程难度：</span>
      </el-col>
      <el-col :span="9">
        <el-select v-model="valuehard" placeholder="请选择课程难度">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="3">
        <span>任课老师：</span>
      </el-col>
      <el-col :span="9">
        <el-select v-model="valueteacher" placeholder="请选择任课老师">
          <el-option
            v-for="item in teachers"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
    </el-row>

    <el-radio v-model="radio" label="1">免费</el-radio>
    <el-radio v-model="radio" label="2">收费</el-radio>
    <el-input v-if="radio==2" placeholder="请输入价格" v-model="input" clearable></el-input>
  </div>
</template>

<script>
export default {
  // name: "stepOne",
  data() {
    return {
      input: "",
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      textarea: "",
      options: [
        {
          value: "选项1",
          label: "初级"
        },
        {
          value: "选项2",
          label: "中级"
        },
        {
          value: "选项3",
          label: "高级"
        }
      ],
      teachers: [
        {
          value: "老师1",
          label: "小吴"
        },
        {
          value: "老师2",
          label: "小董"
        },
        {
          value: "老师3",
          label: "小谢"
        },
        {
          value: "老师4",
          label: "小冯"
        }
      ],
      valuehard: "初级",
      valueteacher: "",
      radio: "1"
    };
  },
  methods: {
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    }
  }
};
</script>

<style lang="scss" scoped>
.stepone-container {
    margin-top: 50px;
  .little-star {
    color: red;
  }
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>

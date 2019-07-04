const state = {
  classInformation: {
    className: '',
    classImg: '',
    classBrif: '',
    classHard: '初级',
    classPayment: '1',
    classFee: '',
    classTeacher: '', // 第一页面数据
    classDetail: '', // 第二页面数据
    classStage: [// 第三个页面的数据

    ]

  }
}
const mutations = {
  ADD_STAGE: (state, val) => { // 操作第三个页面的阶段数加一操作
    state.classInformation.classStage.push(val)// 第三个页面vuex中推进一个空的数据
  },
  MAP_CLASSNAME: (state, val) => { // 第一个页面的课程名称
    state.classInformation.className = val
  },
  MAP_CLASSIMG: (state, val) => { // 第一个页面的课程图片
    state.classInformation.classImg = val
  },
  MAP_CLASSBRIF: (state, val) => { // 第一个页面的课程简介
    state.classInformation.classBrif = val
  },
  MAP_CLASSHARD: (state, val) => { // 第一个页面的课程难度
    state.classInformation.classHard = val
  },
  MAP_CLASSPAYMENT: (state, val) => { // 第一个页面的课程是否付费
    state.classInformation.classPayment = val
  },
  MAP_CLASSFEE: (state, val) => { // 第一个页面的课程付费价格
    state.classInformation.classFee = val
  },
  MAP_CLASSTEACHER: (state, val) => { // 第一个页面的课程老师
    state.classInformation.classTeacher = val
  },
  MAP_CLASSDETAIL: (state, val) => { // 第二个页面的课程详情
    state.classInformation.classDetail = val
  },
  REPLACE_CLASSSTAGE: (state, obj) => {
    var classStage = obj
    Object.assign({}, state.classInformation, classStage)
    state.classInformation
  }
}
export default {
  namespaced: true,
  state,
  mutations
}

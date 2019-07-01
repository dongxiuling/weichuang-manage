const state = {
  nowStageNum: 0, // 第三个页面的阶段数
  classInformation: {
    className: '',
    classImg: '',
    classBrif: '',
    classHard: '',
    classPayment: '1',
    classFee: '',
    classTeacher: '', // 第一页面数据
    classDetail: '', // 第二页面数据
    classStage: [{ // 第三页面数据
      classStateName: '',
      classVideoUrl: '',
      classTaskName: '',
      brain: {
        brainImg: '',
        brainPosition: [
          {}
        ]
      }
    }]

  }
}
const mutations = {
  ADD_STAGE: (state) => { // 操作第三个页面的阶段数加一操作
    state.nowStageNum++
  },
  DELET_STAGE: (state) => { // 操作第三个页面的阶段数减一操作
    state.nowStageNum--
  },
  MAP_CLASSNAME: (state, val) => {
    state.className = val
  },
  MAP_CLASSIMG: (state, val) => {
    state.classImg = val
  },
  MAP_CLASSBRIF: (state, val) => {
    state.classBrif = val
  },
  MAP_CLASSHARD: (state, val) => {
    state.classHard = val
  },
  MAP_CLASSPAYMENT: (state, val) => {
    state.classPayment = val
  },
  MAP_CLASSFEE: (state, val) => {
    state.classFee = val
  },
  MAP_CLASSTEACHER: (state, val) => {
    state.classTeacher = val
  },
  MAP_CLASSDETAIL: (state, val) => {
    state.classDetail = val
  }
}
export default {
  namespaced: true,
  state,
  mutations
}

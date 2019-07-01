const state = {
  nowStageNum: 0, // 第三个页面的阶段数
  classInformation: {
    className: '',
    classImg: '',
    classBrif: '',
    classHard: '初级',
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
    state.classInformation.className = val
  },
  MAP_CLASSIMG: (state, val) => {
    state.classInformation.classImg = val
  },
  MAP_CLASSBRIF: (state, val) => {
    state.classInformation.classBrif = val
  },
  MAP_CLASSHARD: (state, val) => {
    state.classInformation.classHard = val
  },
  MAP_CLASSPAYMENT: (state, val) => {
    state.classInformation.classPayment = val
  },
  MAP_CLASSFEE: (state, val) => {
    state.classInformation.classFee = val
  },
  MAP_CLASSTEACHER: (state, val) => {
    state.classInformation.classTeacher = val
  },
  MAP_CLASSDETAIL: (state, val) => {
    state.classInformation.classDetail = val
  }
}
export default {
  namespaced: true,
  state,
  mutations
}

const state = {
  nowStageNum: 0
}
const mutations = {
  ADD_STAGE(state) {
    state.nowStageNum++
  },
  DELET_STAGE: (state) => {
    state.nowStageNum--
  }
}
export default {
  namespaced: true,
  state,
  mutations
}

import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  search: '',
  tableData: [{
    date: '2016-05-02',
    closingData: '2016-07-02',
    name: '收费1',
    admissions: true,
    full: false,
    id: 1
  }, {
    date: '2016-05-04',
    closingData: '2016-06-04',
    name: '收费2',
    admissions: true,
    full: true,
    id: 2
  }, {
    date: '2016-05-01',
    closingData: '2016-07-01',
    name: '收费3',
    admissions: false,
    full: false,
    id: 3
  }, {
    date: '2016-05-03',
    closingData: '2016-06-03',
    name: '收费4',
    admissions: true,
    full: false,
    id: 4
  }],
  tableData2: [{
    date: '2016-05-02',
    closingData: '2016-07-02',
    name: '免费1',
    admissions: true,
    full: true,
    id: 1
  }, {
    date: '2016-05-04',
    closingData: '2016-06-04',
    name: '免费2',
    admissions: false,
    full: true,
    id: 2
  }, {
    date: '2016-05-01',
    closingData: '2016-07-01',
    name: '免费3',
    admissions: false,
    full: false,
    id: 3
  }, {
    date: '2016-05-03',
    closingData: '2016-06-03',
    name: '免费4',
    admissions: true,
    full: false,
    id: 4
  }],
  options1: [{
    value: true,
    label: '正在招生'
  }, {
    value: false,
    label: '停止招生'
  }],
  options2: [{
    value: true,
    label: '学生未满'
  }, {
    value: false,
    label: '学生已满'
  }],
  delData: [],
  allData: [],
  value1: [],
  value2: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
    state.name = name
  },
  handleEdit(state, row) {
    console.log(row)
  },
  handleDelete1(state, row) {
    state.delData = state.tableData.filter(function(obj) {
      return obj.id !== row.id
    })
    state.tableData = [...state.delData]
  },
  handleDelete2(state, row) {
    state.delData = state.tableData2.filter(function(obj) {
      return obj.id !== row.id
    })
    state.tableData2 = [...state.delData]
  },
  searchHandel(state, value) {
    state.search = value
  },
  getAdmissions(state, value) {
    state.value1 = value
  },
  getFull(state, value) {
    state.value2 = value
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }

        const { name, avatar } = data

        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        removeToken()
        resetRouter()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}


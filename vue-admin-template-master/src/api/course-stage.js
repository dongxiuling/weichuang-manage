import request from '../utils/request'

export function fetchList(query) {
  return request({
    url: '../views/grading/index',
    method: 'get',
    params: query
  })
}

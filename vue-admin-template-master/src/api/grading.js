import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '',
    method: 'get',
    params: query
  })
}

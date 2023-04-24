import request from '@/utils/new-request'

export function fetchList(params) {
  return request({
    url: '/deployment/',
    method: 'get',
    params
  })
}

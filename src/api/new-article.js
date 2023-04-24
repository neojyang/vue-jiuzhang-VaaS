import request from '@/utils/new-request'

export function fetchList(query) {
  return request({
    url: '/result/profiling_history',
    method: 'get',
    params: query
  })
}

export function fetchTs(ts) {
  return request({
    url: '/result/profiling_result',
    method: 'get',
    params: { ts }
  })
}

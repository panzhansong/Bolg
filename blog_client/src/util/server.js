/**
 * server.js 文件主要是针对axios进行二次封装
 */

import axios from 'axios'
import qs from 'querystring'
import { BaseURL } from '@/config'
import { getToken } from '@/util/util'

// export default class HttpRequest {
//   constructor (baseUrl = BaseURL) {
//     this.baseUrl = BaseURL,
//     this.queue = { // 事件队列
//     }
//   }
//   getInsideConfig () {
//     const config = {
//       baseUrl: this.baseUrl,
//       headers: {
//         //
//       }
//     }
//     return config
//   }
//   interceptors (instance, url) {
//     instance.interceptors.request.use( (config) => {
//       if (!Object.keys(this.queue).length) {
//         // Spin.show()
//       }
//       this.queue[url] = true
//       config.headers['Authorization'] = getToken()
//       return config
//     }, (error) => {
//       return Promise.reject(error)
//     })
//     instance.interceptors.response.use ( res => {
//       const { data } = res
//       return data
//     }, (error) => {
//       return Promise.reject(error)
//     })
//   }

//   request (options) {
//     const instance = axios.create()
//     options = Object.assign(this.getInsideConfig(), options)
//     return instance(options)
//   }
// }
const instance = axios.create({ 
  timeout: 5000,
  baseURL: BaseURL
})
// instance.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded'
// instance.defaults.headers.common['Authorization'] = getToken()

instance.interceptors.request.use( (config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  } 
  return config
}, (error) => {
  return Promise.reject(error)
})

instance.interceptors.response.use ( 
  res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
  err => {
    const { response } = err
    if ( response ) {
      return Promise.reject(response)
    } else {
      console.log('断网了')
    }
  }
)
export default instance
import axios from 'axios'
import { URLSearchParams } from 'url';
const defaultURL = 'http://39.108.160.89:8092'
export default async (url, parmas, method) => {
  if (method === 'post') {
    return await new Promise((res, rej) => {
      axios.post(defaultURL + url, parmas,{
        withCredentials: true,
        headers: {
          'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
        },
        transformRequest: [function (data) {
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }]
      })
        .then((result) => {
          res(result)
        })
        .catch((err) => {
          rej(err)
        })
    })
  } else {
    return await new Promise((res, rej) => {
      axios.get(defaultURL + url, {
        ...parmas,
      }
      ,{
        withCredentials: true,
      })
        .then((result) => {
          res(result)
        })
        .catch((err) => {
          rej(err)
        })
    })
  }
}
import axios from 'axios'
import config from '../config/config'

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.get['Content-Type'] = 'application/json'

const { jokesApi } = config

// Posts
const privatePost = (endpoint, body) => {
  const apiConfig = {
    headers: { 'content-type': 'application/json' },
  }
  return axios.post(`${jokesApi}/${endpoint}`, body, apiConfig).then(response => {
    return response
  })
}

const privateGet = (endpoint) => {
  const apiConfig = {
    headers: { 'content-type': 'application/json'},
  }
  return axios.get(`${jokesApi}/${endpoint}`, apiConfig).then(response => {
    return response
  })
}

export default {
  privatePost,  
  privateGet
}

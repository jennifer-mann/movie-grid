import _ from "lodash"
import axios from "axios"
import Promise from "bluebird"

axios.defaults.baseURL = 'https://api.themoviedb.org'

axios.defaults.headers.post['Content-Type'] = 'application/json'

const onStatus = (code) => {
  return function (error) {
    return error.response && error.response.status === code
  }
}

const xhr = (options = {}) => {
  // _.defaults(options, {
  // })

  return Promise.resolve(axios(options))
  .get('data')
}

xhr.onStatus = onStatus

export default xhr

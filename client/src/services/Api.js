// this file sets up connectors for hitting backend
// it gives back a connector

import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://localhost:8081/'
  })
}

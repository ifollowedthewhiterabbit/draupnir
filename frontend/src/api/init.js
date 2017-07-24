import axios from 'axios'

export default axios.create({
  baseURL: process.env.REACT_UP_API_URL
})
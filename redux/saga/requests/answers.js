import axios from 'axios'

export function sendAnswers({ _id, answers }) {
  return axios.post(`/api/results`, { _id, answers })
}

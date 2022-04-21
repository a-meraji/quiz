import axios from "axios";

export function sendAnswers(postedAnswers) {
  const{_id, answers} = postedAnswers;
  console.log("_id in request: ",_id);
  return axios.post(`/api/results`, {_id, answers});
}
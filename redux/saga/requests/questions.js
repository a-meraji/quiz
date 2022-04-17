import axios from "axios";

export function fetchQuestions(examID) {
  return axios.get(`/api/exams/questions?examID=${examID}`);
}
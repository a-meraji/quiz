import { takeLatest, all } from 'redux-saga/effects'
import { handleGetExam } from './handlers/exam'
import { handleSendAnswers } from './handlers/answers'
import { getExam, sendAnswers } from '../ducks/examSlice'

function* getExamWatcher() {
  yield takeLatest(getExam.type, handleGetExam)
}
function* sendAnswersWatcher() {
  yield takeLatest(sendAnswers.type, handleSendAnswers)
}

export function* watcherSaga() {
  yield all([getExamWatcher(), sendAnswersWatcher()])
}

import { takeLatest } from 'redux-saga/effects'
import { handleGetQuestions } from './handlers/questions'
import { getQuestions } from '../ducks/questionsSlice'

export function* watcherSaga() {
  yield takeLatest(getQuestions.type, handleGetQuestions)
}

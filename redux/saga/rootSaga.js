import { takeLatest } from 'redux-saga/effects'
import { handleGetExam } from './handlers/exam'

import { getExam } from '../ducks/examSlice'

export function* watcherSaga() {
  yield takeLatest(getExam.type, handleGetExam)
   
}
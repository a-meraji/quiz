import { call, put } from 'redux-saga/effects'
import { setResult } from '../../ducks/examSlice'
import { setLoading } from '../../ducks/layoutSlice'
import { sendAnswers } from '../requests/answers'

export function* handleSendAnswers(action) {
  yield put(setLoading(true))
  try {
    if (action.payload === undefined) {
      throw new Error('_id and aswers were undefined')
    }
    const { data } = yield call(sendAnswers, action.payload)
    yield put(setResult(data))
  } catch (error) {
    console.log(error)
  }
  yield put(setLoading(false))
}

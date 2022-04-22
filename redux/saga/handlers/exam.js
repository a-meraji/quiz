import { call, put } from 'redux-saga/effects'
import { setExam } from '../../ducks/examSlice'
import { fetchExam } from '../requests/exam'
import { setLoading } from '../../ducks/layoutSlice'

export function* handleGetExam(action) {
  try {
    if (action.payload === undefined) {
      throw new Error('_id is undefined')
    }
    yield put(setLoading(true))
    const { data } = yield call(fetchExam, action.payload)
    yield put(setExam({ ...data }))
    yield put(setLoading(false))
  } catch (error) {
    console.log(error)
    yield put(setLoading(false))
  }
}

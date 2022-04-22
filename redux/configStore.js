import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from './saga/rootSaga'
import examSlice from './ducks/examSlice'
import layoutSlice from './ducks/layoutSlice'

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
  exam: examSlice,
  layout: layoutSlice,
})

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
})

sagaMiddleware.run(watcherSaga)

export default store

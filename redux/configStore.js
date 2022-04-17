import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from './saga/rootSaga'
import questionsSlice from './ducks/questionsSlice'
import examSlice from './ducks/examSlice';

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
    questions: questionsSlice,
    exam: examSlice,
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
})

sagaMiddleware.run(watcherSaga)

export default store

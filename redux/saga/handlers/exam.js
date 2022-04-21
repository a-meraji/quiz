import { call, put } from "redux-saga/effects";
import { setExam } from "../../ducks/examSlice";
import { fetchExam } from "../requests/exam";

export function* handleGetExam(action) {
  try {  
    const {data} = yield call(fetchExam, action.payload);
    yield put(setExam({...data}));
  } catch (error) {
    console.log(error);
  }
}
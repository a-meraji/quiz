import { call, put } from "redux-saga/effects";
import { setQusetoins } from "../../ducks/questionsSlice";
import { fetchQuestions } from "../requests/questions";

export function* handleGetQuestions(action) {
  try {
    const response = yield call(fetchQuestions(action.payload));
    const { data } = response;
    yield put(setQusetoins({ ...data }));
  } catch (error) {
    console.log(error);
  }
}
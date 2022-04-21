import { call, put } from "redux-saga/effects";
import { setResult } from "../../ducks/examSlice";
import { sendAnswers } from "../requests/answers";

export function* handleSendAnswers(action) {
  try {  
    const {data} = yield call(sendAnswers, action.payload);
    console.log("data is handler: ",data);
    yield put(setResult({...data}));
  } catch (error) {
    console.log(error);
  }
}
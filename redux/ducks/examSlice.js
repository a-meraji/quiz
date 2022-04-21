import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  questionIndex: 0,
  _id: "",
  name: "",
  startDate: "",
  endDate: "",
  isTimeRestricted: false,
  timePerTest: 0,
  isEditable: true,
  isShuffle: true,
  exam: [{}],
  answers: [],
  result: "",
  wrongAnswerds: [],
}

const examSlice = createSlice({
  name: 'exam',
  initialState,
  reducers: {
    toggleQuestionIndex: (state, action) => {
      const index = action.payload === 'inc' ? 1 : -1
      return { ...state, questionIndex: state.questionIndex + index }
    },
    setQuestionIndex: (state, action) => {
      const index = action.payload
      return { ...state, questionIndex: index }
    },
    getExam: (state, action) => {
      return { ...state }
    },
    setExam: (state, action) => {
      const {
        _id,
        name,
        startDate,
        endDate,
        isTimeRestricted,
        isEditable,
        isShuffle,
        timePerTest,
        exam,
      } = action.payload

      return {
        ...state,
        _id,
        name,
        startDate,
        endDate,
        isTimeRestricted,
        isEditable,
        isShuffle,
        timePerTest,
        exam,
      }
    },
    setAnswers: (state, action) => {
      const { qID, aID } = action.payload
      let newAnswers = []
      if(state.answers.length === 0) {newAnswers = [{ qID, aID }]}
      else{
        const isIncluded = state.answers.filter(
          (answer) => answer.qID === qID
          ).length === 1
          if (isIncluded) {
            newAnswers = state.answers.map((answer) =>
            answer.qID === qID ? { qID, aID } : answer
            )
          } else {
            newAnswers = [...state.answers, { qID, aID }]
          }
        }
      return { ...state, answers: newAnswers }
    },
    sendAnswers: (state, action) => {
      return { ...state}
    },
    setResult: (state, action) => {
      const {result, wrongAnswerds} = action.payload
      return { ...state, result, wrongAnswerds }
    },
  },
})

export const {
  toggleQuestionIndex,
  setQuestionIndex,
  getExam,
  setExam,
  setAnswers,
  sendAnswers,
  setResult,
} = examSlice.actions

export default examSlice.reducer

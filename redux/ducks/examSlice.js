import { createSlice } from '@reduxjs/toolkit'

const examSlice = createSlice({
  name: 'exam',
  initialState: { questionIndex: 0, answers: [{qID:"0",aID: '0' }] },
  reducers: {
    toggleQuestionIndex: (state, action) => {
      const index = action.payload === 'inc' ? 1 : -1
      return { ...state, questionIndex: state.questionIndex + index }
    },
    setQuestionIndex: (state, action) => {
      const index = action.payload
      return { ...state, questionIndex: index }
    },
    addAnswer: (state, action) => {
      return { ...state, answers: [...state.answers, action.payload.answer] }
    },
    changeAnswer: (state, action) => {
      const { qID, aID } = action.payload
      const newAnswers = state.answers.map((answer) =>
        answer.qID === qID ? { ...answer, aID } : answer
      )
      return { ...state, answers: newAnswers }
    },
    setAnswers: (state, action) => {
      const {qID, aID} = action.payload;
      const isIncluded = state.answers.filter(answer=>answer.qID===qID).length===1;
      let newAnswers = [];
    if (isIncluded) {
     newAnswers = state.answers.map((answer) =>
      answer.qID === qID ? {qID, aID } : answer
    )
    }else{
      newAnswers = [...state.answers, {qID, aID }]
    }
    return { ...state, answers: newAnswers }
    }
  },
})

export const {
  toggleQuestionIndex,
  setQuestionIndex,
  addAnswer,
  changeAnswer,
  setAnswers,
} = examSlice.actions

export default examSlice.reducer

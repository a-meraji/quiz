import { createSlice } from '@reduxjs/toolkit'

const questionsSlice = createSlice({
  name: 'questions',
  initialState: {
    questions: [{ qID: '', qTXT: '', answers: [{ aID: '', aTXT: '' }] }],
  },
  reducers: {
    getQuestions: (state, action) => {},
    setQusetoins: (state, action) => {
      const questions = action.payload
      return { ...state, questions }
    },
  },
})

export const { getQuestions, setQusetoins } = questionsSlice.actions

export default questionsSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    isLoading: false,
    notife: { isTriggerd: false, message: '', color: '' },
  },
  reducers: {
    setLoading: (state, action) => {
      return { ...state, isLoading: action.payload }
    },
    setNotife: (state, action) => {
      return {
        ...state,
        notife: {
          isTriggerd: true,
          message: action.payload.message,
          color: action.payload.color,
        },
      }
    },
    clearNotife: (state) => {
      return { ...state, notife: {...state.notife, isTriggerd: false} }
    },
  },
})

export const {setLoading, setNotife, clearNotife} = layoutSlice.actions;

export default layoutSlice.reducer;
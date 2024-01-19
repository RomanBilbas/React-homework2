import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  exercise: [
    {
      id: uuidv4(),
      isFavorite: false,
      fullName: ''
    }
  ]
}

const exerciveList = createSlice({
  initialState,
  name: 'exercise',
  reducers: {
    createExective: (state, { payload }) => {
      state.exercise.push({ ...payload, isFavorite: false, id: uuidv4() })
    },
    deleteExetcive: (state, { payload }) => {
      console.log(payload)
      state.exercise = state.exercise.filter(e => e.id !== payload)
    },
    updateExerciveL: (state, { payload: { id, data } }) => {
      console.log('updateExerciveL:', id, data)
      const updateExerciveIndex = state.exercise.findIndex(e => e.id === id)
      state.exercise[updateExerciveIndex] = {
        ...state.exercise[updateExerciveIndex],
        ...data
      }
    }
  }
})

const { reducer, actions } = exerciveList

export const { createExective, deleteExetcive, updateExerciveL } = actions

export default reducer

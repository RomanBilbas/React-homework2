import { configureStore } from '@reduxjs/toolkit'
import exerciveList from './slices/AppSlices'
const store = configureStore({
  reducer: {
    exerciveList: exerciveList
  }
})

export default store

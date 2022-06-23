import { configureStore } from '@reduxjs/toolkit'
import MoviesReducer from '../services/MoviesReducer'

export default configureStore({
  reducer: {
    movies: MoviesReducer
  },
})
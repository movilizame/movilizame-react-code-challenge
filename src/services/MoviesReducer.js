import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from './movies'
const api = new API()

export const fetchMovies = createAsyncThunk(
    'movies/StoreMovies',
    async ({title, year}, thunkAPI) => {
      const response = await api.getMovies(title, year)
      return response
    }
)

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload
    })
  },
})

export default moviesSlice.reducer
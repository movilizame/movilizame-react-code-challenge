import {
  createSlice,
} from '@reduxjs/toolkit';

const initialState = {
  moviesList: [],
  moviesSearched: [],
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action) => ({
      ...state,
      moviesList: [...state.moviesList, action.payload],
    }),
    searchMovie: (state, action) => ({
      ...state,
      moviesSearched: action.payload,
    }),
    deleteMovie: (state, action) => ({
      ...state,
      moviesList: state.moviesList.filter((actualMovie) => actualMovie.id !== action.payload),
    }),
    clearMovieList: (state) => ({
      ...state,
      moviesList: [],
    }),
  },
});

export const {
  addMovie,
  clearMovieList,
  deleteMovie,
  searchMovie,
} = movieSlice.actions;

export default movieSlice.reducer;

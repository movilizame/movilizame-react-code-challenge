const { createContext, useReducer } = require("react");

export const MoviesContext = createContext(null);
export const MoviesDispatchContext = createContext(null);

function moviesReducer(state, action) {
  switch (action.type) {
    case "setMovies": {
      return { ...state, movies: action.movies };
    }
    case "clear": {
      return { ...state, movies: [] };
    }
    case "addMovie": {
      return {
        ...state,
        watchList: state.watchList.concat(action.watchList),
      };
    }
    case "deleteMovie": {
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => action.watchList.id !== movie.id
        ),
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export const initialState = {
  movies: [],
  watchList: [],
};

export default function MoviesContextProvider({ children }) {
  const [auth, dispatch] = useReducer(moviesReducer, initialState);
  return (
    <MoviesContext.Provider
      value={{ movies: auth.movies, watchList: auth.watchList }}
    >
      <MoviesDispatchContext.Provider value={dispatch}>
        {children}
      </MoviesDispatchContext.Provider>
    </MoviesContext.Provider>
  );
}

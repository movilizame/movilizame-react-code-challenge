const { createContext, useReducer, useContext } = require("react")

export const MoviesContext = createContext(null);

export const useMoviesContext = () => {
  return useContext(MoviesContext);
}

function moviesReducer(state, action) {
    switch (action.type) {
        case 'setMovies': {
          return {...state, 
            movies: state.movies.concat(action.movies),
          };
        }
        case 'clear': {
          return {...state,
            movies: [],
          };
        }
        default: {
          throw Error('Unknown action: ' + action.type);
        }
    }
}
const initialState = {
  movies: []
}

export default function MoviesContextProvider ({ children }) {
    const [auth, dispatch] = useReducer(moviesReducer, initialState);
    return (
      <MoviesContext.Provider value={{ movies: auth.movies, dispatch}}>
        {children}
      </MoviesContext.Provider>
    )
}
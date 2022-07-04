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
        case 'setList': {
          return {
            ...state,
            list: state.list.concat(action.list)
          }
        }
        case 'deleteItem': {
          return {
            ...state,
            list: state.list.filter(item => item.id !== action.list.id)
          }
        }
        default: {
          throw Error('Unknown action: ' + action.type);
        }
    }
}
const initialState = {
  movies: [],
  list: []
}

export default function MoviesContextProvider ({ children }) {
    const [auth, dispatch] = useReducer(moviesReducer, initialState);
    return (
      <MoviesContext.Provider value={{ movies: auth.movies, dispatch, list: auth.list }}>
        {children}
      </MoviesContext.Provider>
    )
}
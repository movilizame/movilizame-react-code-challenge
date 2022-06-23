import store from "../../store/store";
import { Provider } from "react-redux";
const { createContext, useReducer, default: React } = require("react")

export const MoviesContext = createContext(null);
export const MoviesDispatchContext = createContext(null);


function moviesReducer(state, action) {
    switch (action.type) {
        case 'setMovies': {
          return {...state, 
            movies: action.movies,
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

export default function MoviesContextProvider ({ children }) {
    const [auth, dispatch] = useReducer(moviesReducer, {});

    return (
      <Provider store={store}>
        <MoviesContext.Provider value={auth}>
            <MoviesDispatchContext.Provider value={dispatch}>
                { children }
            </MoviesDispatchContext.Provider>
        </MoviesContext.Provider>
      </Provider>
    )
}
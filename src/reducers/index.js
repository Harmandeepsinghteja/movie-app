import { combineReducers } from "redux";

import { bindActionCreators } from "redux";
import { ADD_MOVIES, ADD_FAVOURITES, REMOVE_FAVOURITES,SHOW_FAVOURITES } from "../actions";

const initialMoviesState = {
  list: [],
  favourites: [],
  showFavourites: false
};

export function movie(state = initialMoviesState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVOURITES:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    case REMOVE_FAVOURITES:
      const filteredFavourite =state.favourites.filter((movie) => action.movie !== movie);
      return {
        ...state,
        favourites: filteredFavourite,
      };
      case SHOW_FAVOURITES:
          return {
              ...state,
              showFavourites: action.val,
          }
    default:
      return state;
  }
}


const initialSearchState = {
    result: []
};

export function search (state = initialSearchState, action){
    return {
        ...state
    }
} 
const initialRootState = {
    movies: initialMoviesState,
    serach: initialSearchState
}


// export default function rootReducer(state= initialRootState, action){
//     return {
//         movies: movie(state.movies, action),
//         search: search(state.search, action)
//     }
// }


export default combineReducers({
    movies: movie,
    search: search
})
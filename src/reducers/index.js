import { bindActionCreators } from "redux";
import { ADD_MOVIES, ADD_FAVOURITES, REMOVE_FAVOURITES,SHOW_FAVOURITES } from "../actions";

const initialMoviesState = {
  list: [],
  favourites: [],
  showFavourites: false
};

export default function movie(state = initialMoviesState, action) {
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

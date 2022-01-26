// {
//     type: 'ADD_MOVIES',
//     movies: [m1,m2,m3]
// }

// Action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const REMOVE_FAVOURITES = "REMOVE_FAVOURITES";
export const SHOW_FAVOURITES = "SHOW_FAVOURITES";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
// Action creator
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

export function addFavourites(movie) {
  return {
    type: ADD_FAVOURITES,
    movie,
  };
}

export function removeFavourites(movie) {
  return {
    type: REMOVE_FAVOURITES,
    movie,
  };
}

export function showFavourites(val) {
  return {
    type: SHOW_FAVOURITES,
    val,
  };
}

export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
}

export function handleMovieSearch(movie) {
  const url = `https://www.omdbapi.com/?apikey=ae8e79e8&t=${movie}`;
    console.log(url);
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log(movie);
        dispatch(addMovieSearchResult(movie));
      });
  };
}

export function addMovieSearchResult(movie){
    return {
        type: ADD_SEARCH_RESULT,
        movie
    }
}

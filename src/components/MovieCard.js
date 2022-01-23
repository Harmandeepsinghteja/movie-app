import React from "react";
import {addFavourites ,removeFavourites} from '../actions';


class MovieCard extends React.Component {
  clickFavourites = () => {
      const {movie} = this.props;
    this.props.dispatch(addFavourites(movie));
  };
  clickunFavourites = () => {
    const {movie} = this.props;
  this.props.dispatch(removeFavourites(movie));
};

  render() {
    const { movie, isFavourite } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.Title} </div>
          <div className="plot"> {movie.Plot} </div>
          <div className="footer">
            <div className="rating">
              {movie.imdbRating}
              {
                  isFavourite
                  ?  <button className="unfavourite-btn" onClick={this.clickunFavourites}> unFavourite </button>
                  :  <button className="favourite-btn" onClick={this.clickFavourites}> Favourite </button>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MovieCard;

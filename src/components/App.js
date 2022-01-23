import React from "react";
import {data} from '../data';
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import {addMovies, addFavourites} from '../actions';

class App extends React.Component {

  componentDidMount () {
    // make an api call to get movies

    const {store} = this.props;
    store.subscribe(() => {
      this.forceUpdate();
    })
    // dispatch action
    store.dispatch(addMovies(data));
  }

  isFavourite = (movie) => {
    const {favourites} = this.props.store.getState();
    const index = favourites.indexOf(movie);
    if(index !== -1){
      return true;
    }
    return false;
  
  }


  render() {
    const {list} = this.props.store.getState();
    console.log(this.props.store.getState())
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movie</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {list.map((movie, index) => (
              <MovieCard 
              movie={movie} 
              key={`movies-${index}`} 
              dispatch={this.props.store.dispatch}
              isFavourite={this.isFavourite(movie)} 
              
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

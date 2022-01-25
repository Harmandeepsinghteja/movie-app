import React from "react";
import {data} from '../data';
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import {addMovies, addFavourites ,removeFavourites, showFavourites} from '../actions';

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
    const {movies} = this.props.store.getState();
    const index = movies.favourites.indexOf(movie);
    if(index !== -1){
      return true;
    }
    return false;
  
  }

  changeTab(val) {

    this.props.store.dispatch(showFavourites(val));

    return;
  }

  render() {
    const {movies} =  this.props.store.getState()
    const {list, favourites,showFavourites } = movies;
    
    const showList = showFavourites ? favourites:list;
    console.log(showFavourites)
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '': 'active-tabs' } `} onClick={() => this.changeTab(false)}>Movie</div>
            <div className={`tab ${showFavourites ? 'active-tabs': '' } `} onClick={() => this.changeTab(true)}> Favourites </div>
          </div>
          <div className="list">
            {showList.map((movie, index) => (
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

import React from "react";
import {data} from '../data';
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

class App extends React.Component {

  componentDidMount () {
    // make an api call to get movies

    const {store} = this.props;
    store.subscribe(() => {
      this.forceUpdate();
    })
    // dispatch action
    store.dispatch({
      type: 'ADD_MOVIES',
      movies: data
    });
  }


  render() {
    const movies = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movie</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

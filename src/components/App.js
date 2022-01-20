import React from "react";
import {data} from '../data';
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import {addMovies} from '../actions';

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


  render() {
    const {list} = this.props.store.getState();
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
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

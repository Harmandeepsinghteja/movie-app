import React from "react";
import {data} from '../data';
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import {addMovies, addFavourites ,removeFavourites, showFavourites} from '../actions';
import {connect} from "react-redux";


class App extends React.Component {

  componentDidMount () {
    // make an api call to get movies

 

    
    // dispatch action
    this.props.dispatch(addMovies(data));
  }

  isFavourite = (movie) => {
    const {movies} = this.props;
    const index = movies.favourites.indexOf(movie);
    if(index !== -1){
      return true;
    }
    return false;
  
  }

  changeTab(val) {

    this.props.dispatch(showFavourites(val));

    return;
  }

  render() {
    const {movies, search} =  this.props
    const {list, favourites,showFavourites } = movies;
    
    const showList = showFavourites ? favourites:list;
    console.log(showFavourites)
    return (
      <div className="App">
        <Navbar dispatch={this.props.dispatch} search={search} />
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
              dispatch={this.props.dispatch}
              isFavourite={this.isFavourite(movie)} 
              
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}


// class AppWrapper extends React.Component{
//   render(){
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} /> }
//       </StoreContext.Consumer>
//     )
//   }
// }

function callBack(state){
  return {
    movies: state.movies,
    search: state.search
  }
}

const connectedAppComponent = connect(callBack)(App);

export default connectedAppComponent;

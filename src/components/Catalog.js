import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import MovieList from './MovieList';
import MovieListHeading from './MovieListHeading';
import SearchBox from './SearchBox';
import AddFavorite from './AddFavorite';
import RemoveFavorite from './RemoveFavorite';

class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchValue: '',
      favorites: [],
    };
  }
  getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=79f37eac`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      this.setState({ movies: responseJson.Search });
    }
  };

  saveToLocal = (items) => {
    localStorage.setItem('react-movie-app-favorites', JSON.stringify(items));
  };

  addFavoriteMovie = (movie) => {
    const newFavoriteList = [...this.state.favorites, movie];
    this.setState({ favorites: newFavoriteList });
    this.saveToLocal(newFavoriteList);
  };
  removeFavoriteMovie = (movie) => {
    const newFavoriteList = this.state.favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );
    this.setState({ favorites: newFavoriteList });
    this.saveToLocal(newFavoriteList);
  };
  componentDidMount() {
    const movieFavorites =
      JSON.parse(localStorage.getItem('react-movie-app-favorites')) || [];
    this.setState({ favorites: movieFavorites });
  }

  setSearchValue = (value) => {
    console.log(value);
    this.setState({ searchValue: value });
    this.getMovieRequest(value);
  };

  render() {
    const { searchValue, movies, favorites } = this.state;

    return (
      <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center mt-4 mb-2">
          <MovieListHeading heading="Movies" />
          <SearchBox
            searchValue={searchValue}
            setSearchValue={this.setSearchValue}
          />
        </div>
        <div className="row">
          <MovieList
            movies={movies}
            favoriteComponent={AddFavorite}
            handleFavoriteClicks={this.addFavoriteMovie}
          />
        </div>
        <div className="row d-flex align-items-center mt-4 mb-2">
          <MovieListHeading heading="Favorites" />
        </div>
        <div className="row">
          <MovieList
            movies={favorites}
            favoriteComponent={RemoveFavorite}
            handleFavoriteClicks={this.removeFavoriteMovie}
          />
        </div>
      </div>
    );
  }
}

export default Catalog;

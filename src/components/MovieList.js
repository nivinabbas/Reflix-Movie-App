import React, { Component, Fragment } from 'react';

class MovieList extends Component {
  render() {
    const {
      movies,
      handleFavoriteClicks,
      favoriteComponent: FavoriteMovie,
    } = this.props;
    return (
      <Fragment>
        {movies.map((movie, index) => (
          <div
            key={index}
            className="image-container d-flex justify-content-start m-3"
          >
            <img
              src={movie.Poster}
              alt="movie"
              style={{ borderRadius: 16, padding: 0, marginRight: 0 }}
            />
            <div
              className="overlay d-flex alig-items-center justify-contect-center"
              onClick={() => handleFavoriteClicks(movie)}
            >
              <FavoriteMovie />
            </div>
          </div>
        ))}
      </Fragment>
    );
  }
}

export default MovieList;

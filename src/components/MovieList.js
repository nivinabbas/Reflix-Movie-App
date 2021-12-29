import React, { Fragment } from 'react';
const MovieList = (props) => {
    const FavoriteMovie=props.favoriteComponent;
  return (
    <Fragment>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-3">
          <img
            src={movie.Poster}
            alt="movie"
            style={{ borderRadius: 16, padding: 0, marginRight: 0 }}
          />
          <div className="overlay d-flex alig-items-center justify-contect-center" onClick={()=>props.handleFavoriteClicks(movie)}>
              <FavoriteMovie/>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default MovieList;

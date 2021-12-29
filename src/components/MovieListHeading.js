import React, { Component } from 'react';

class MovieListHeading extends Component {
  render() {
    return (
      <div className="col">
        <h1>{this.props.heading}</h1>
      </div>
    );
  }
}

export default MovieListHeading;

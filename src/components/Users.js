import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Users extends Component {
  render() {
    return (
      <div>
        <h1 className="header-text">Who's Watching</h1>
        <div id="home-container">
          <div className="user">
            <Link to={'/catalog'}>
              <span className="main-directory-text">Nivin</span>
            </Link>
          </div>

          <div className="user">
            <Link to={'/catalog'}>
              <span className="main-directory-text">Fadi</span>
            </Link>
          </div>
          <div className="user">
            <Link to={'/catalog'}>
              <span className="main-directory-text">Ali</span>
            </Link>
          </div>
          <div className="user">
            <Link to={'/catalog'}>
              <span className="main-directory-text">Asad</span>
            </Link>
          </div>
          <div className="user">
            <Link to={'/catalog'}>
              <span className="main-directory-text">Nareen</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;

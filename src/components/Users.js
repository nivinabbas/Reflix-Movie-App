import React from 'react';
import { Link } from 'react-router-dom';
// import Link from 'react-router-dom/NavLink';

const Users = () => {
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
};

export default Users;

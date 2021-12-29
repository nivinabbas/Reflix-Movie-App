import React from 'react';
import { Link } from 'react-router-dom';



const Users =()=> {

        return (
            <div >
                <h1 className='header-text' >Who's Watching</h1>
                <div id="home-container">
          
                  
                 <div className="user" ><a href='/catalog' className="main-directory-text">Nivin</a></div>
                <div className="user"><a href='/catalog' className="main-directory-text">Fadi</a></div>
                <div className="user"><a href='/catalog' className="main-directory-text">Ali</a></div>
                <div className="user"><a href='/catalog' className="main-directory-text">Asad</a></div>
                <div className="user"><a href='/catalog' className="main-directory-text">Nareen</a></div>
          
                  
            </div>

            </div>
     
        );
    }


export default Users;
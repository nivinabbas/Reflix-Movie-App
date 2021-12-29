import React from 'react';
import Users from "./Users";
import "../App"
import { BrowserRouter as Router,Link, Route} from 'react-router-dom';
import Catalog from './Catalog';


const NavBar =()=>{

 
        return (
           
        <div>
        
        <Router>
       
        <div id="main-links">
        <h3 className='logo'>Reflix</h3>
            <Link to="/">Users</Link>
            <Link to="/catalog">Catalog</Link>
           
            
            
            <Route exact path="/" component={Users} />
            <Route exact path="/catalog" component={Catalog} />
      
          </div>
        </Router>
      </div>
        );
        }


export default NavBar;
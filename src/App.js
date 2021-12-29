
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Users from "./components/Users";
import { BrowserRouter as Router,Link, Route} from 'react-router-dom';
import Catalog from './components/Catalog';
import { Component } from 'react';

class App extends Component{
 render(){
  return (
    <div className="container-fluid movie-app">
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
}};

export default App;

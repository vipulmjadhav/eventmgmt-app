import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateToDo from "./components/create-todo.component";
import EditToDo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import Login from "./components/login.component";
import Signup from "./components/signup.component";


import logo from "./logo.png";

class App extends Component{

render(){
  return (

    <Router> 
    


    <div className = "container">
     
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand"> Event management System </Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">events</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Event</Link>
                </li>
              </ul>
            </div>
          </nav>

    <Route path ="/login" exact component ={Login}/>
    <Route path = "/" exact component = {TodosList} />
    <Route path = "/create"  component = {CreateToDo} />
    <Route path = "/edit:id" component = {EditToDo}/> 
    <Route path = "/signup" exact component = {Signup}/>

    </div>

    </Router>
      );
  }
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from './home.js';
import Login from './login.js';
import Register from './register.js';
import Navbar from './navbar.js';
import Userlist from './userlist';
import axios from 'axios';
import {useEffect,useState} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
 
   return(
     <>
    <Router>
        <Navbar></Navbar>
          <Switch>
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
          <Route path="/home/:id" component={Home} exact />
            <Route path="/userlist/:id" component={Userlist} exact />
          </Switch>
      </Router>
     </>
   )
  
}

export default App;

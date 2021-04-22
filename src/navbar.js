import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import Home from './home.js'



function Navbar(){
    
    let history=useHistory();
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-dark  bg-primary">
  <a class="navbar-brand" href="#">URL shortner</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
     <Link to="/"> <li class="nav-item nav-link active text-light">Home </li></Link>
     <Link to="/register"> <li class="nav-item nav-link text-light"> Register </li></Link>
     <Link to="/login"> <li class="nav-item nav-link text-light">Login </li></Link>
     <Link class="nav-item nav-link text-light" to="/login" onClick={()=>{
                             window.localStorage.removeItem("app_token");
                             history.push(`/adminlogin`);
                        }}>Logout</Link>
    </ul>
    
  </div>
</nav>
        </>
    )
}

export default Navbar;
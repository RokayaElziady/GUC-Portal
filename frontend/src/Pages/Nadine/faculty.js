import React from 'react';

import '../../Stylesheets/Nadine/faculty.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Add from "./components/Faculty/addFaculty";
import Delete from "./components/Faculty/deleteFaculty";
import Update from "./components/Faculty/updateFaculty";
function App() {
  return (
    
    <div className="App">
      <nav className="navbar navbar-expand col-12 navbar-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/addFaculty"}>Faculty</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/addFaculty"}>Add a faculty</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/deleteFaculty"}>delete a faculty</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/updateFaculty"}>update a faculty</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner ">
          <Switch>
            <Route exact path='/' component={Add} />
            <Route path="/addFaculty" component={Add} />
            <Route path="/deleteFaculty" component={Delete} />
            <Route path="/updateFaculty" component={Update} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
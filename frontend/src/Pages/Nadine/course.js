import React from 'react';

import '../../Stylesheets/Nadine/faculty.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Add from "./components/Course/addCourse";
import Delete from "./components/Course/deleteCourse";
import Update from "./components/Course/updateCourse";
function App() {
  return (
    
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/addCourse"}>Course</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/addCourse"}>Add </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/deleteCourse"}>Delete </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/updateCourse"}>Update </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={Add} />
            <Route path="/addCourse" component={Add} />
            <Route path="/deleteCourse" component={Delete} />
            <Route path="/updateCourse" component={Update} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
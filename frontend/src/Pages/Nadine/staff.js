import React from 'react';

import '../../Stylesheets/Nadine/faculty.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Add from "./components/staff/addStaff";
import Delete from "./components/staff/deleteStaff";
import Update from "./components/staff/updateStaff";
import Edit from "./components/staff/editSalary";
function App() {
  return (
    
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/addStaff"}>Staff</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/addStaff"}>Add </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/deleteStaff"}>Delete </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/updateStaff"}>Update </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/editSalary"}>Edit Salary </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={Add} />
            <Route path="/addStaff" component={Add} />
            <Route path="/deleteStaff" component={Delete} />
            <Route path="/updateStaff" component={Update} />
            <Route path="/editSalary" component={Edit} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
import React from 'react';

import '../../Stylesheets/Nadine/faculty.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Add from "./components/Department/addDepartment";
import Delete from "./components/Department/deleteDepartment";
import Update from "./components/Department/updateDepartment";
function App() {
  return (
    
    <div className="App">
      <nav className="navbar navbar-expand col-12 navbar-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/addDepartment"}>Department</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/addDepartment"}>Add a Department</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/deleteDepartment"}>delete a Department</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/updateDepartment"}>update a Department</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner ">
          <Switch>
            <Route exact path='/' component={Add} />
            <Route path="/addDepartment" component={Add} />
            <Route path="/deleteDepartment" component={Delete} />
            <Route path="/updateDepartment" component={Update} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
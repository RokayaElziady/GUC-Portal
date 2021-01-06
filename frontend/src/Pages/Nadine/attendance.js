import React from 'react';

import '../../Stylesheets/Nadine/faculty.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Add from "./components/Attendance/viewMissing";
import staff from "./components/Attendance/Attendance";
import sign from "./components/Attendance/sign";
function App() {
  return (
    
    <div className="App">
      <nav className="navbar navbar-expand col-12 navbar-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" >Attendance</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/viewMissing"}>Staff with missing attendance</Link>
                <Link className="nav-link" to={"/staffAttendance"}>Attendance</Link>
                <Link className="nav-link" to={"/sign"}>Add Missing signin/sign out</Link>
              </li>
             
   
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner ">
          <Switch>

            <Route path="/viewMissing" component={Add} />
            <Route path="/staffAttendance" component={staff} />
            <Route path="/sign" component={sign} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
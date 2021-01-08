import React from 'react'
import Button from 'react-bootstrap/Button'
import '../../Stylesheets/Mariam/main.css'
import Header from '../Nadine/components/Header/Header';
import Side from '../Nadine/components/Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Update from "../Mariam/components/update"
import Sign from "../Mariam/components/signing"
import Hours from "../Mariam/components/missinghours"
import Days from "../Mariam/components/missingdays"
import My from "../Mariam/components/myAttendance"
import Salary from "../Nadine/components/Attendance/salaryDeduction"
export default function MainAcademicPage(props) {
  const history = useHistory()
  //const name = useSelector((state) => state.name)


  return (
    <div className="App">
 
      <nav className="blue navbar  fixed-top">
      <Header name="WELCOME"/>
      
        
          <div class="col-sm-12  hideSmall">
            <div class="row">
      
            <button  class="offset-sm-1 col-sm-2 buttonblue "  onClick={()=> history.push("/signing")} ><span>sign</span></button>
            <button  class="col-sm-2 buttonblue " onClick={()=> history.push("/hours")}><span>Missing Hours</span></button>
            <button  class="col-sm-2 buttonblue " onClick={()=> history.push("/days")}><span>Missing Days</span></button>
            <button  class="col-sm-2 buttonblue " onClick={()=> history.push("/salary")}><span>Salary</span></button>
            <button  class="col-sm-2 buttonblue " onClick={()=> history.push("/updateme")}><span>Update Profile</span></button>
                  </div>  </div>
 
       
      </nav>

      <div className="outer2">
        <div className="inner2">
        <Switch>

<Route path="/signing" component={Sign} />
<Route path="/myAttendance" component={My} />
<Route path="/hours" component={Hours} />
<Route path="/days" component={Days} />
<Route path="/salary" component={Salary} />
<Route path="/updateme" component={Update} />
</Switch>

        </div>
      </div>
      <div class="row center2">
 
   
    <div id="class" onClick={()=> history.push("/myAttendance")}>
      <span id="blue"></span>
      <span class="text">My Attendance</span>
    </div>
    
</div>
    </div>
  
  )
}

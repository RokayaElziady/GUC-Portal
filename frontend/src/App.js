import React from 'react'
import MainAcademic from './Pages/Rokaya/academicMain'
import Main from './Pages/Mariam/main'

import MainHr from './Pages/Nadine/hrMain'
import ViewSchedule from './Pages/Rokaya/viewSchedule'
import Faculty from './Pages/Nadine/faculty'
import Department from './Pages/Nadine/department'
import Course from './Pages/Nadine/course'
import Location from './Pages/Nadine/location'
import Not from './Pages/Nadine/notfound'
import Staff from './Pages/Nadine/staff'
import Attendance from './Pages/Nadine/attendance'
import Sign from './Pages/Nadine/components/Attendance/sign'

import ViewSlotLinkingRequests from './Pages/Rokaya/viewSlotLinkingRequests'
import ViewNotifications from './Pages/Rokaya/viewNotifications'
import ViewRecievedReplacements from './Pages/Rokaya/viewRecievedReplacemetRequest'
import ViewSentReplacements from './Pages/Rokaya/viewSentReplacementRequests'
import ViewAllRequests from './Pages/Rokaya/viewAllRequests'
import { BrowserRouter as Router, Route,Switch, Redirect } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'font-awesome/css/font-awesome.min.css';

import Login from './Pages/Rokaya/login'



function App() {
  return (
    <Router>
    <React.Fragment>
    <Switch>
    <Route exact path='/sign' render={()=><Attendance/>}/>
    <Route exact path='/signing' render={()=><Main/>}/>
    <Route exact path='/myAttendance' render={()=><Main/>}/>
    <Route exact path='/hours' render={()=><Main/>}/>
    <Route exact path='/days' render={()=><Main/>}/>
    <Route exact path='/salary' render={()=><Main/>}/>
    <Route exact path='/staff' render={()=><Staff/>}/>
    <Route exact path='/attendance' render={()=><Attendance/>}/>
    <Route exact path='/viewMissing' render={()=><Attendance/>}/>
    <Route exact path='/staffAttendance' render={()=><Attendance/>}/>
    <Route exact path='/faculty' render={()=><Faculty/>}/>
    <Route exact path='/department' render={()=><Department/>}/>
    <Route exact path='/course' render={()=><Course/>}/>
    <Route exact path='/location' render={()=><Location/>}/>
    <Route exact path='/addFaculty' render={()=><Faculty/>}/>
    <Route exact path='/deleteFaculty' render={()=><Faculty/>}/>
    <Route exact path='/updateFaculty' render={()=><Faculty/>}/>
    <Route exact path='/addDepartment' render={()=><Department/>}/>
    <Route exact path='/deleteDepartment' render={()=><Department/>}/>
    <Route exact path='/updateDepartment' render={()=><Department/>}/>
    <Route exact path='/addCourse' render={()=><Course/>}/>
    <Route exact path='/deleteCourse' render={()=><Course/>}/>
    <Route exact path='/updateCourse' render={()=><Course/>}/>
    <Route exact path='/addLocation' render={()=><Location/>}/>
    <Route exact path='/deleteLocation' render={()=><Location/>}/>
    <Route exact path='/updateLocation' render={()=><Location/>}/>
    <Route exact path='/addStaff' render={()=><Staff/>}/>
    <Route exact path='/deleteStaff' render={()=><Staff/>}/>
    <Route exact path='/updateStaff' render={()=><Staff/>}/>
    <Route exact path='/editSalary' render={()=><Staff/>}/>
    <Route exact path='/home' render={()=><MainAcademic/>}/>
    <Route exact path='/hr' render={()=><MainHr/>}/>

    <Route exact path='/' render={()=><Login/>}/>
    <Route exact path='/main' render={()=><Main/>}/>
    <Route exact path='/viewSchedule' render={()=><ViewSchedule/>}/>
 
    <Route exact path='/viewSentReplacements' render={()=><ViewSentReplacements/>}/>
    <Route exact path='/viewRecievedReplacements' render={()=><ViewRecievedReplacements/>}/>
    <Route exact path='/viewAllRequests' render={()=><ViewAllRequests/>}/>
    <Route exact path='/viewSlotLinking' render={()=><ViewSlotLinkingRequests/>}/>
    <Route exact path='/viewNotifications' render={()=><ViewNotifications/>}/>
    
    <Route exact path='/sign' render={()=><Attendance/>}/> 
    <Route exact path='/*' render={()=><Not/>}/> 
    </Switch>
     </React.Fragment>
     </Router>
   
  );
}

export default App;

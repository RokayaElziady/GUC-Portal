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
import Staff2 from './Pages/Nadine/staff'
import Attendance from './Pages/Nadine/attendance'
import Sign from './Pages/Nadine/components/Attendance/sign'
import {useEffect} from 'react'
import ViewSlotLinkingRequests from './Pages/Rokaya/viewSlotLinkingRequests'
import ViewNotifications from './Pages/Rokaya/viewNotifications'
import ViewRecievedReplacements from './Pages/Rokaya/viewRecievedReplacemetRequest'
import ViewSentReplacements from './Pages/Rokaya/viewSentReplacementRequests'
import ViewAllRequests from './Pages/Rokaya/viewAllRequests'
import { BrowserRouter as Router, Route,Switch, Redirect } from 'react-router-dom'
import HODMain from './Pages/Hagar/HODMain';
import ManageCourses from './Pages/Hagar/manageCourses';
import ManageInstructors from './Pages/Hagar/manageInstructors';
import RequestsInDepartment from './Pages/Hagar/requestsInDepartment';
import StaffInDepartment from './Pages/Hagar/staffInDepartment';
import CourseInstructorMain from './Pages/Hagar/courseInstructorMain';
import ManageSlots from './Pages/Hagar/manageSlotsInstructor';
import ManageCoursesInstructor from './Pages/Hagar/manageCoursesInstructor';
import Staff from './Pages/Hagar/courseInstructorStaff';

import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'font-awesome/css/font-awesome.min.css';

import Login from './Pages/Rokaya/login'
import ChangePassword  from './Pages/Rokaya/changePassword'
import ViewProfile from './Pages/Rokaya/viewProfile'


function App() {
  console.log("type")
  console.log(sessionStorage.getItem("type"))

  console.log("token")
  console.log(sessionStorage.getItem("token"))
  return (
    <Router>
    <React.Fragment>
    <Switch>
    {(sessionStorage.getItem("token") && sessionStorage.getItem("type")==="hr")&&
    <Route exact path='/sign' render={()=><Attendance/>}/>}
    {(sessionStorage.getItem("token"))&&
    <Route exact path='/signing' render={()=><Main/>}/>}
    {(sessionStorage.getItem("token")) && 
    <Route exact path='/updateme' render={()=><Main/>}/>}
    {(sessionStorage.getItem("token")) && 
    <Route exact path='/myAttendance' render={()=><Main/>}/>}
    {(sessionStorage.getItem("token")) && 
    <Route exact path='/hours' render={()=><Main/>}/>}
    {(sessionStorage.getItem("token")) && 
    <Route exact path='/days' render={()=><Main/>}/>}
    {(sessionStorage.getItem("token")) &&
    <Route exact path='/salary' render={()=><Main/>}/>}
    {(sessionStorage.getItem("token") && sessionStorage.getItem("type")==="hr")&&
    <Route exact path='/staff' render={()=><Staff2/>}/>}
    {(sessionStorage.getItem("token") && sessionStorage.getItem("type")==="hr")&&
    <Route exact path='/attendance' render={()=><Attendance/>}/>}
    {(sessionStorage.getItem("token") && sessionStorage.getItem("type")==="hr")&&
    <Route exact path='/viewMissing' render={()=><Attendance/>}/>}
    {(sessionStorage.getItem("token") && sessionStorage.getItem("type")==="hr")&&
    <Route exact path='/staffAttendance' render={()=><Attendance/>}/>}
    {(sessionStorage.getItem("token") && sessionStorage.getItem("type")==="hr")&&
    <Route exact path='/faculty' render={()=><Faculty/>}/>}
    {(sessionStorage.getItem("token") && sessionStorage.getItem("type")==="hr")&&
    <Route exact path='/department' render={()=><Department/>}/>}
    {(sessionStorage.getItem("token") && sessionStorage.getItem("type")==="hr")&&
    <Route exact path='/course' render={()=><Course/>}/>}
    {(sessionStorage.getItem("token") && sessionStorage.getItem("type")==="hr")&&
    <Route exact path='/location' render={()=><Location/>}/>}
    {(sessionStorage.getItem("token")&& sessionStorage.getItem("type")==="hr")&&
    <Route exact path='/addFaculty' render={()=><Faculty/>}/>}
    {(sessionStorage.getItem("token")&& sessionStorage.getItem("type")==="hr")&&
    <Route exact path='/deleteFaculty' render={()=><Faculty/>}/>}
    {(sessionStorage.getItem("token")&& sessionStorage.getItem("type")==="hr")&&
    <Route exact path='/updateFaculty' render={()=><Faculty/>}/>}
    {(sessionStorage.getItem("token")&& sessionStorage.getItem("type")==="hr")&&
    <Route exact path='/addDepartment' render={()=><Department/>}/>}
    {(sessionStorage.getItem("token")&& sessionStorage.getItem("type")==="hr")&&
    <Route exact path='/deleteDepartment' render={()=><Department/>}/>}
    {(sessionStorage.getItem("token")&& sessionStorage.getItem("type")==="hr")&&
    <Route exact path='/updateDepartment' render={()=><Department/>}/>}
    {(sessionStorage.getItem("token")&& sessionStorage.getItem("type")==="hr")&&
    <Route exact path='/addCourse' render={()=><Course/>}/>}
    {(sessionStorage.getItem("token")&& sessionStorage.getItem("type")==="hr")&&
    <Route exact path='/deleteCourse' render={()=><Course/>}/>}
    {(sessionStorage.getItem("token")&& sessionStorage.getItem("type")==="hr")&&
    <Route exact path='/updateCourse' render={()=><Course/>}/>}
    {(sessionStorage.getItem("token")&& sessionStorage.getItem("type")==="hr")&&
    <Route exact path='/addLocation' render={()=><Location/>}/>}
    {(sessionStorage.getItem("token")&& sessionStorage.getItem("type")==="hr")&&
    <Route exact path='/deleteLocation' render={()=><Location/>}/>}
    {(sessionStorage.getItem("token")&& sessionStorage.getItem("type")==="hr")&&
    <Route exact path='/updateLocation' render={()=><Location/>}/>}
    {(sessionStorage.getItem("token")&& sessionStorage.getItem("type")==="hr")&&
    <Route exact path='/addStaff' render={()=><Staff2/>}/>}
    {(sessionStorage.getItem("token")&& sessionStorage.getItem("type")==="hr")&&
    <Route exact path='/deleteStaff' render={()=><Staff2/>}/>}
    {(sessionStorage.getItem("token")&& sessionStorage.getItem("type")==="hr")&&
    <Route exact path='/updateStaff' render={()=><Staff2/>}/>}
    {(sessionStorage.getItem("token")&& sessionStorage.getItem("type")==="hr")&&
    <Route exact path='/editSalary' render={()=><Staff2/>}/>}
    {(sessionStorage.getItem("token")&& sessionStorage.getItem("type")==="hr")&&
    <Route exact path='/hr' render={()=><MainHr/>}/>}
    {(sessionStorage.getItem("type")) && 
    <Route exact path='/main' render={()=><Main/>}/>}

  <Route exact path='/' render={()=><Login/>}/>
   {<Route exact path='/home' render={()=><MainAcademic/>}/>}
    { (sessionStorage.getItem("token")&& sessionStorage.getItem("type")==="ac")&& <Route exact path='/viewProfile' render={()=><ViewProfile/>}/>}
   {(sessionStorage.getItem("token")&& sessionStorage.getItem("type")==="ac")&& <Route exact path='/viewSchedule' render={()=><ViewSchedule/>}/>}
    <Route exact path='/changePassword' render={()=><ChangePassword/>}/>
    {(sessionStorage.getItem("token")&& sessionStorage.getItem("type")==="ac")&& <Route exact path='/viewSentReplacements' render={()=><ViewSentReplacements/>}/>}
   {(sessionStorage.getItem("token")&& sessionStorage.getItem("type")==="ac")&& <Route exact path='/viewRecievedReplacements' render={()=><ViewRecievedReplacements/>}/>}
   {(sessionStorage.getItem("token")&& sessionStorage.getItem("type")==="ac")&& <Route exact path='/viewAllRequests' render={()=><ViewAllRequests/>}/>}
  {(sessionStorage.getItem("token")&& sessionStorage.getItem("type")==="ac")&& <Route exact path='/viewSlotLinking' render={()=><ViewSlotLinkingRequests/>}/>}
   {(sessionStorage.getItem("token")&& sessionStorage.getItem("type")==="ac")&& <Route exact path='/viewNotifications' render={()=><ViewNotifications/>}/>}
    <Route exact path='/HOD' render={()=><HODMain/>}/>
    <Route exact path='/HOD/manageCourses' render={()=><ManageCourses/>}/>
    <Route exact path='/HOD/manageInstructors' render={() => <ManageInstructors />} />
    <Route exact path='/HOD/requestsInDepartment' render={() => <RequestsInDepartment />} />
    <Route exact path='/HOD/staffInDepartment' render={() => <StaffInDepartment />} />
    <Route exact path='/courseInstructor' render={() => <CourseInstructorMain />} />
    <Route exact path='/courseInstructor/manageCourses' render={() => <ManageCoursesInstructor />} />
    <Route exact path='/courseInstructor/manageSlots' render={() => <ManageSlots />} />
    <Route exact path='/courseInstructor/staffInDepartment' render={()=><Staff/>}/>
 
    <Route exact path='/*' render={()=><Not/>}/> 
    </Switch>
     </React.Fragment>
     </Router>
   
  );
}

export default App;

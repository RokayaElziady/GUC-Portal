import React from 'react'
import MainAcademic from './Pages/Rokaya/academicMain'
import ViewSchedule from './Pages/Rokaya/viewSchedule'
import ViewRecievedReplacements from './Pages/Rokaya/viewRecievedReplacemetRequest'
import ViewSentReplacements from './Pages/Rokaya/viewSentReplacementRequests'
import HODMain from './Pages/Hagar/HODMain';
import ManageCourses from './Pages/Hagar/manageCourses';
import ManageInstructors from './Pages/Hagar/manageInstructors';
import RequestsInDepartment from './Pages/Hagar/requestsInDepartment';
import StaffInDepartment from './Pages/Hagar/staffInDepartment';
import CourseInstructorMain from './Pages/Hagar/courseInstructorMain';
import ManageSlots from './Pages/Hagar/manageSlotsInstructor';
import ManageCoursesInstructor from './Pages/Hagar/manageCoursesInstructor';
import Staff from './Pages/Hagar/courseInstructorStaff';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <Router>
    <React.Fragment>
    <Route exact path='/' render={()=><MainAcademic/>}/>
    <Route exact path='/viewSchedule' render={()=><ViewSchedule/>}/>
    <Route exact path='/viewSentReplacements' render={()=><ViewSentReplacements/>}/>
    <Route exact path='/viewRecievedReplacements' render={()=><ViewRecievedReplacements/>}/>
    <Route exact path='/HOD' render={()=><HODMain/>}/>
    <Route exact path='/HOD/manageCourses' render={()=><ManageCourses/>}/>
    <Route exact path='/HOD/manageInstructors' render={() => <ManageInstructors />} />
    <Route exact path='/HOD/requestsInDepartment' render={() => <RequestsInDepartment />} />
    <Route exact path='/HOD/staffInDepartment' render={() => <StaffInDepartment />} />
    <Route exact path='/courseInstructor' render={() => <CourseInstructorMain />} />
    <Route exact path='/courseInstructor/manageCourses' render={() => <ManageCoursesInstructor />} />
    <Route exact path='/courseInstructor/manageSlots' render={() => <ManageSlots />} />
    <Route exact path='/courseInstructor/staffInDepartment' render={()=><Staff/>}/>
    </React.Fragment>
    </Router>
   
  );
}

export default App;

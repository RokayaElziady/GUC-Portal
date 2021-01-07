import React ,{useEffect} from 'react'
import MainAcademic from './Pages/Rokaya/academicMain'
import ViewSchedule from './Pages/Rokaya/viewSchedule'
import ViewSlotLinkingRequests from './Pages/Rokaya/viewSlotLinkingRequests'
import ViewNotifications from './Pages/Rokaya/viewNotifications'
import ViewRecievedReplacements from './Pages/Rokaya/viewRecievedReplacemetRequest'
import ViewSentReplacements from './Pages/Rokaya/viewSentReplacementRequests'
import ViewAllRequests from './Pages/Rokaya/viewAllRequests'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'font-awesome/css/font-awesome.min.css';

import Login from './Pages/Rokaya/login'
import ChangePassword  from './Pages/Rokaya/changePassword'


function App() {
  //console.log(Path)
  return (
    <Router>
    <React.Fragment>
    <Route exact path='/' render={()=><Login/>}/>
    <Route exact path='/home' render={()=><MainAcademic/>}/>
    <Route exact path='/changePassword' render={()=><ChangePassword/>}/>
    <Route exact path='/viewSchedule' render={()=><ViewSchedule/>}/>
    <Route exact path='/viewSentReplacements' render={()=><ViewSentReplacements/>}/>
    <Route exact path='/viewRecievedReplacements' render={()=><ViewRecievedReplacements/>}/>
    <Route exact path='/viewAllRequests' render={()=><ViewAllRequests/>}/>
    <Route exact path='/viewSlotLinking' render={()=><ViewSlotLinkingRequests/>}/>
    <Route exact path='/viewNotifications' render={()=><ViewNotifications/>}/>
    
    
    
     </React.Fragment>
     </Router>
   
  );
}

export default App;

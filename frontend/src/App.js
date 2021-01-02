import React from 'react'
import MainAcademic from './Pages/Rokaya/academicMain'
import ViewSchedule from './Pages/Rokaya/viewSchedule'
import ViewRecievedReplacements from './Pages/Rokaya/viewRecievedReplacemetRequest'
import ViewSentReplacements from './Pages/Rokaya/viewSentReplacementRequests'
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
    
     </React.Fragment>
     </Router>
   
  );
}

export default App;

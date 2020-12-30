import React from 'react'
import MainAcademic from './Pages/Rokaya/academicMain'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <Router>
    <React.Fragment>
    <Route exact path='/' render={()=><MainAcademic/>}/>
    <Route exact path='/viewSchedule' render={()=><MainAcademic/>}/>
     </React.Fragment>
     </Router>
   
  );
}

export default App;

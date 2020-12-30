import React,{useEffect} from 'react'
import logo from '../../Images/GUC.png'
import '../../Stylesheets/Rokaya/MainAcademic.css'
import Table from 'react-bootstrap/Table'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'




export default function MainAcademicPage(props) {
  const history = useHistory()
  //const name = useSelector((state) => state.name)

  const viewScheduleClick=()=>{
    history.push("/viewSchedule")
  }
  return (
  <Table>
    <tbody>
      <tr>
      <td className="MainAcademicTableColumn1">
        <tr>
          <p className="MainAcademicListFont" onClick={viewScheduleClick}>View Schedule</p>
        </tr>
        <tr>
          <p className="MainAcademicListFont" onClick={viewScheduleClick}>View SlotLinking Requests</p>
        </tr>
        <tr>
          <p className="MainAcademicListFont" onClick={viewScheduleClick}>Add Slot</p>
        </tr>
        <tr>
          <p className="MainAcademicListFont" onClick={viewScheduleClick}>Update Slot</p>
        </tr>
        <tr>
          <p className="MainAcademicListFont" onClick={viewScheduleClick}>Delete Slot</p>
        </tr>
        <tr>
          <p className="MainAcademicListFont" onClick={viewScheduleClick}>send Replacement Request</p>
        </tr>
        <tr>
          <p className="MainAcademicListFont" onClick={viewScheduleClick}>view Sent Replacement Requests </p>
        </tr>
        <tr>
          <p className="MainAcademicListFont" onClick={viewScheduleClick}>view Recieved Replacement Requests </p>
        </tr>
        <tr>
          <p className="MainAcademicListFont" onClick={viewScheduleClick}>Send SlotLinking Request </p>
        </tr>
        <tr>
          <p className="MainAcademicListFont" onClick={viewScheduleClick}> Send Change Day Off Request </p>
        </tr>
        <tr>
          <p className="MainAcademicListFont" onClick={viewScheduleClick}>Send Matrenity leave  Request </p>
        </tr>
        <tr>
          <p className="MainAcademicListFont" onClick={viewScheduleClick}>Send annual leave  Requests </p>
        </tr>
        <tr>
          <p className="MainAcademicListFont" onClick={viewScheduleClick}>Send Sick leave Request </p>
        </tr>
        <tr>
          <p className="MainAcademicListFont" onClick={viewScheduleClick}>Send Accidental leave Request </p>
        </tr>
        <tr>
          <p className="MainAcademicListFont" onClick={viewScheduleClick}>Send Compensation leave Request </p>
        </tr>
        <tr>
          <p className="MainAcademicListFont" onClick={viewScheduleClick}>View Notifications </p>
        </tr>
        <tr>
          <p className="MainAcademicListFont" onClick={viewScheduleClick}>View Request Status </p>
        </tr>
        <tr>
          <p className="MainAcademicListFont" onClick={viewScheduleClick}>Cancel Request </p>
        </tr>
        
       
      </td>

      <td className="MainAcademicTableColumn2">
     <img className="MainAcademicLogo" src={logo} alt="Logo" />
     </td>
      </tr>
     </tbody>
    </Table>

  )
}
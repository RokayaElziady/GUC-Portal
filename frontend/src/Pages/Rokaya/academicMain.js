import React, { useState } from 'react'
import logo from '../../Images/GUC.png'
import '../../Stylesheets/Rokaya/MainAcademic.css'
import Table from 'react-bootstrap/Table'
import { useHistory } from 'react-router'
import SendReplacementRequest from '../../Components/Rokaya/sendReplacementModal'
import SendSlotLinking from '../../Components/Rokaya/sendSlotLinkingModal'
import SendChangeDayOffRequest from '../../Components/Rokaya/sendChangeDayOff'





export default function MainAcademicPage(props) {
  const [sendReplacement,setSendReplacement]=useState(false)
  const [sendSlot,setSendSlot]=useState(false)
  const [sendDayyOff,setSendDayOff]=useState(false)
  const history = useHistory()
  //const name = useSelector((state) => state.name)

  const viewScheduleClick=()=>{
    history.push("/viewSchedule")
  }

  const viewSentReplacmentsClick=()=>{
    history.push("/viewSentReplacements")
  }

  const viewRecievedReplacmentsClick=()=>{
    history.push("/viewRecievedReplacements")
  }

  const viewAllRequestsClick=()=>{
    console.log("view all requests")
    //setSendReplacement(true)
    console.log(sendReplacement)
    history.push("/viewAllRequests")
   // window.location.reload();
  }



  return (
    <div>
  <Table>
    <tbody className="MainAcademicTable">
      <td className="MainAcademicTableColumn1">
        <tr className="MainAcademicList">
        <tr >
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
          <p className="MainAcademicListFont"onClick={()=>{ setSendReplacement(true)}}>send Replacement Request</p>
        </tr>
        <tr>
          <p className="MainAcademicListFont" onClick={viewSentReplacmentsClick}>view Sent Replacement Requests </p>
        </tr>
        <tr>
          <p className="MainAcademicListFont" onClick={viewRecievedReplacmentsClick}>view Recieved Replacement Requests </p>
        </tr>
        <tr>
          <p className="MainAcademicListFont" onClick={()=>{ setSendSlot(true)}}>Send SlotLinking Request </p>
        </tr>
        <tr>
          <p className="MainAcademicListFont" onClick={()=>{setSendDayOff(true)}}> Send Change Day Off Request </p>
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
          <p className="MainAcademicListFont" onClick={viewAllRequestsClick}>View All Submited Requests</p>
        </tr>
        <tr>
          <p className="MainAcademicListFont" onClick={viewScheduleClick}>Cancel Request </p>
        </tr>
        </tr>
       
      </td>

      <td className="MainAcademicTableColumn2">
        <tr>
        <img className="MainAcademicLogo" src={logo} alt="Logo" />
        </tr>
     </td>

     </tbody>
    </Table>
    <SendReplacementRequest show={sendReplacement} setShow={setSendReplacement}></SendReplacementRequest>
    <SendSlotLinking show={sendSlot} setShow={setSendSlot}></SendSlotLinking>
    <SendChangeDayOffRequest show= {sendDayyOff}  setShow={setSendDayOff} ></SendChangeDayOffRequest>
    </div>

    

  )
}

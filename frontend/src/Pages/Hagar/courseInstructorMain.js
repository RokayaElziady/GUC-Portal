import React from 'react'
import logo from '../../Images/GUC.png'
import '../../Stylesheets/Rokaya/MainAcademic.css'
import Table from 'react-bootstrap/Table'
import { useHistory } from 'react-router'




export default function CourseInstructorMain(props) {
  const history = useHistory()
  //const name = useSelector((state) => state.name)

  const manageSlots=()=>{
    history.push("/courseInstructor/manageSlots")
  }

  const manageCourses=()=>{
    history.push("/courseInstructor/manageCourses")
  }


    const staffInDepartment = () => {
        history.push("/courseInstructor/staffInDepartment")
    }


  return (
  <Table>
    <tbody className="MainAcademicTable">
      <td className="MainAcademicTableColumn1">
        <tr className="MainAcademicList">
        <tr>
          <p className="MainAcademicListFont" onClick={manageCourses}>Manage Courses</p>
        </tr>
        <tr>
          <p className="MainAcademicListFont" onClick={manageSlots}>Manage Slots </p>
        </tr>
        <tr>
          <p className="MainAcademicListFont" onClick={staffInDepartment}>Staff In Department</p>
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

  )
}

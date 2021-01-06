import React,{useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../Images/GUC.png'
import '../../Stylesheets/Rokaya/ViewSchedule.css'
import '../../Stylesheets/Rokaya/MainAcademic.css'
import '../../Stylesheets/Rokaya/viewSentReplacementRequests.css'
import Table from 'react-bootstrap/Table'
import {Modal,ModalBody,ModalFooter,ModalHeader,Button} from 'reactstrap'
import axios from 'axios'
import {backendLink} from '../../keys_dev'
import { useHistory } from 'react-router';






export default function ViewSentReplacements(props) {
  const [requests, setRequests] = useState([])
  const [modal, setModal] = useState(false);
  const [error,setError]=useState('')
  const toggle = () => {
      setModal(!modal)
      window.location.reload();
    };

    const history=useHistory()

    const logoutClick=()=>{
      history.push("/")
    }
  

  const  viewRequest=(r)=>{
    if(r.status!="canceled"){
   return(
       <div>
               <tr>
                   <td>
                       #
                   </td>
                   <td className="viewSentReplacementRequestTextTitle">
                          <p>To: </p>
                   </td>
                   <td className="viewSentReplacementRequestTextData">
                            {r.to}
                   </td>
                   <td className="viewSentReplacementRequestTextTitle">
                            <p>Status: </p>
                   </td>
                   <td className="viewSentReplacementRequestTextData">
                           {r.status} 
                   </td>

                   <td className="viewSentReplacementRequestTextTitle">
                            <p>Slot: </p>
                   </td>
                   <td className="viewSentReplacementRequestTextData">
                           {r.slot} 
                   </td>
                   {(r.reason && r.reason!=null)?<><td className="viewSentReplacementRequestTextTitle">
                          <p>Reason: </p>
                   </td>
                   <td className="viewSentReplacementRequestTextData">
                   {JSON.stringify(r.reason).substring(1,11)}
                   </td></>:(<></>)}

                   {(r.replacementMembers && r.replacementMembers!=null && r.replacementMembers.length>0)?<><td className="viewSentReplacementRequestTextTitle">
                          <p>Replacement Members: </p>
                   </td>
                   <td className="viewSentReplacementRequestTextData">
                   {JSON.stringify(r.replacementMembers).substring(1,11)}
                   </td></>:(<></>)}

                   <td className="viewSentReplacementRequestTextTitle">
                          <p>Date Of Request: </p>
                   </td>
                   <td className="viewSentReplacementRequestTextData">
                            {JSON.stringify(r.dateOfRequest).substring(1,11)}
                   </td>
                   <td className="viewSentReplacementRequestTextTitle">
                               <p>Date Submitted: </p>
                   </td>
                   <td className="viewSentReplacementRequestTextData">
                   {JSON.stringify(r.dateSubmitted).substring(1,11)} 
                   </td>
                   <td>
                   <i className="fa fa-close closeIcon"  onClick={()=>handleCancelRequest(r._id)}></i>
                   </td>

       </tr>


       <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader toggle={toggle}>Take Care</ModalHeader>
    <ModalBody>
    {/* {JSON.stringify(error).substring(1,error.length-1)} */}
    {error}
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={toggle}>Ok</Button>
    </ModalFooter>
  </Modal>

       </div>
    
     
   )

   }
 
}


const  handleCancelRequest= async(x)=>{
   
    setModal(!modal)
  await axios({
      url: `${backendLink}/request/cancelRequest`,
      method: 'put',
      headers: {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFjLTEiLCJyb2xlIjoiY29vcmRpbmF0b3IiLCJpYXQiOjE2MDkzNDA3MTR9.Gj-oLfyvDPDNY6f_PBmPuWU6_Ep8ZJtKc9h4NEBiAZE",
      },
      data: {
           request:x,
          },
     
    }).then((res) => {
        console.log(res)
        if(res.data.statusCode===1){
            setError(res.data.error)
        }
        else{
            setError(res.data.msg)
        }
    }).catch((err) => {
        console.log(err.response)
      })


     
  }






  useEffect( async () => {
       await axios({
                url: `${backendLink}/request/viewSentReplacementRequest`,
                method: 'get',
                headers: {
                  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFjLTEiLCJyb2xlIjoiY29vcmRpbmF0b3IiLCJpYXQiOjE2MDkzNDA3MTR9.Gj-oLfyvDPDNY6f_PBmPuWU6_Ep8ZJtKc9h4NEBiAZE",
                },
               
              }).then((res) => {
                  if(res.status===200){
               setRequests(res.data.requests)
               console.log(res.data.requests)
                  }
              }).catch((err) => {
                  console.log(err.response)
                })
              }
              ,[])


  return (
      <div>

        <img className="viewScheduleLogo" src={logo} alt="Logo" />
        <i className="fa fa-sign-out fa-lg sign-out-ALL" onClick={logoutClick}></i>
          <p className="viewScheduleHeaders">Requests</p>
          <Table  striped>
           <tbody>
            {
              requests.map((r)=>{
                  return(
                  viewRequest(r)
                  )
              })
          
            } 
              </tbody>
       </Table>        
</div>

  )
}

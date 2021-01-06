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






export default function ViewSlotLinkingRequests(props) {
  const [requests, setRequests] = useState([])
  const [modal, setModal] = useState(false);
  const [error,setError]=useState('')
  const toggle = () => {
      setModal(!modal)
      window.location.reload();
    };


    
const  handleAcceptRequest= async(x)=>{
   
    setModal(!modal)
  await axios({
      url: `${backendLink}/request/acceptSlotLinkingRequest`,
      method: 'post',
      headers: {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFjLTEiLCJyb2xlIjoiY29vcmRpbmF0b3IiLCJpYXQiOjE2MDkzNDA3MTR9.Gj-oLfyvDPDNY6f_PBmPuWU6_Ep8ZJtKc9h4NEBiAZE",
      },
      data: {
           request:x,
          },
     
    }).then((res) => {
        console.log("hey")
        console.log(res)
        if(res.data.statusCode==2 || res.data.statusCode==1){
            setError(res.data.error)

        }
        else{
            setError(res.data.msg)
        }
    }).catch((err) => {
        console.log(err.response)
      })


     
  }


  const  handleRejectRequest= async(x)=>{
   
    setModal(!modal)
  await axios({
      url: `${backendLink}/request/rejectSlotLinkingRequest`,
      method: 'post',
      headers: {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFjLTEiLCJyb2xlIjoiY29vcmRpbmF0b3IiLCJpYXQiOjE2MDkzNDA3MTR9.Gj-oLfyvDPDNY6f_PBmPuWU6_Ep8ZJtKc9h4NEBiAZE",
      },
      data: {
           request:x,
          },
     
    }).then((res) => {
        if(res.data.statusCode==2 || res.data.statusCode==1){
            setError(res.data.error)

        }
        else{
            setError(res.data.msg)
        }
    }).catch((err) => {
        console.log(err.response)
      })


     
  }


  const  viewRequest=(r)=>{
   return(
       <div>
               <tr>
                   <td>
                       #
                   </td>
                   <td className="viewSentReplacementRequestTextTitle">
                          <p>From: </p>
                   </td>
                   <td className="viewSentReplacementRequestTextData">
                            {r.from}
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
                   <i className="fa fa-close closeIcon" onClick={()=>handleRejectRequest(r._id)}></i>
                   <i className="fa fa-check checkIcon" onClick={()=>handleAcceptRequest(r._id)}></i>

                   </td>

       </tr>


       <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader toggle={toggle}>NOTE</ModalHeader>
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
 

  useEffect( async () => {
       await axios({
                url: `${backendLink}/request/viewAllSlotLinkingRequests`,
                method: 'get',
                headers: {
                  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFjLTEiLCJyb2xlIjoiY29vcmRpbmF0b3IiLCJpYXQiOjE2MDkzNDA3MTR9.Gj-oLfyvDPDNY6f_PBmPuWU6_Ep8ZJtKc9h4NEBiAZE",
                },
               
              }).then((res) => {
                  setRequests(res.data.requests)
                if(res.data.statusCode==2 || res.data.statusCode==1){
                    setError(res.data.error)
  
                }
                else{
                    setError(res.data.msg)
                }
              }).catch((err) => {
                  console.log(err.response)
                })
              }
              ,[])

  return (
      <div>

        <img className="viewScheduleLogo" src={logo} alt="Logo" />
          <p className="viewScheduleHeaders"> Slot-Linking Requests</p>
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
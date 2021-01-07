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






export default function ViewAllRequests(props) {
  const [requests, setRequests] = useState([])
  const [accepted, setAccepted] = useState([])
  const [rejected, setRejected] = useState([])
  const [pending, setPending] = useState([])

  const [filter, setFilter] = useState('')
  const [modal, setModal] = useState(false);
  const [error,setError]=useState('')
  const history=useHistory()
  const toggle = () => {
      setModal(!modal)
      window.location.reload();
    };

    const logoutClick= async ()=>{
      await axios({
        url: `${backendLink}/logging/logout`,
        method: 'post',
      }).then((res) => {
          console.log(res)
          
      }).catch((err) => {
          console.log(err.response)
        })
      history.push("/")
    }
  

    const filterAccepted=()=>{
       // console.log("heyyyyyyyyyy")
       if(filter==='acc'){
                setFilter('')
       }
       else{
        setFilter('acc')
       }
        var x=requests.filter((r)=>{
            if(r.status==="accepted"){
                return r
            }
        })

        setAccepted(x)

    //    window.location.reload();
    }

    const filterPending=()=>{
        if(filter==='pend'){
            setFilter('')
   }
   else{
    setFilter('pend')
   }
        var x=requests.filter((r)=>{
            if(r.status==="pending"){
                return r
            }
        })

        setPending(x)
    }

    const filterRejected=()=>{
        if(filter==='rej'){
            setFilter('')
   }
   else{
    setFilter('rej')
   }
        var x=requests.filter((r)=>{
            if(r.status==="rejected"){
                return r
            }
        })

        setRejected(x)
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
    

  const  viewRequest=(r)=>{
    console.log("reqqqqqqq")
    console.log(r)
    //console.log(r.dateOfRequest)
    
   return(
       <div>
               <tr >
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
                            <p>Type: </p>
                   </td>
                   <td className="viewSentReplacementRequestTextData">
                           {r.type} 
                   </td>
                   {(r.reason && r.reason!=null)?<><td className="viewSentReplacementRequestTextTitle">
                          <p>Reason: </p>
                   </td>
                   <td className="viewSentReplacementRequestTextData">
                   {JSON.stringify(r.reason).substring(1,11)}
                   </td></>:(<></>)}

                   {(r.dayOff && r.dayOff!=null)?<><td className="viewSentReplacementRequestTextTitle">
                          <p>Day Off: </p>
                   </td>
                   <td className="viewSentReplacementRequestTextData">
                   {JSON.stringify(r.dayOff).substring(1,11)}
                   </td></>:(<></>)}

                   {(r.replacementMembers && r.replacementMembers!=null && r.replacementMembers.length>0)?<><td className="viewSentReplacementRequestTextTitle">
                          <p>Replacement Members: </p>
                   </td>
                   <td className="viewSentReplacementRequestTextData">
                   {JSON.stringify(r.replacementMembers).substring(1,11)}
                   </td></>:(<></>)}

                   {(r.compensationDay && r.compensationDay!=null)?<><td className="viewSentReplacementRequestTextTitle">
                          <p>Compensation Day: </p>
                   </td>
                   <td className="viewSentReplacementRequestTextData">
                   {JSON.stringify(r.compensationDay).substring(1,11)}
                   </td></>:(<></>)}

                   {(r.dateOfRequest && r.dateOfRequest!=null)?<><td className="viewSentReplacementRequestTextTitle">
                          <p>Date Of Request: </p>
                   </td>
                   <td className="viewSentReplacementRequestTextData">
                   {JSON.stringify(r.dateOfRequest).substring(1,11)}
                   </td></>:(<></>)}
                   
                   <td className="viewSentReplacementRequestTextTitle">
                               <p>Date Submitted: </p>
                   </td>
                   <td className="viewSentReplacementRequestTextData">
                   {JSON.stringify(r.dateSubmitted).substring(1,11)}
                   </td>
                   <td>
                   <i className="fa fa-close closeIcon" onClick={()=>handleCancelRequest(r._id)}></i>
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

   var reqClone=requests;
   if(filter=='acc'){
       reqClone=accepted
   }
   if(filter=='pend'){
    reqClone=pending
}
if(filter=='rej'){
    reqClone=rejected
}

 


  useEffect( async () => {
       await axios({
                url: `${backendLink}/request/viewAllSubmittedRequests`,
                method: 'get',
                headers: {
                  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFjLTEiLCJyb2xlIjoiY29vcmRpbmF0b3IiLCJpYXQiOjE2MDkzNDA3MTR9.Gj-oLfyvDPDNY6f_PBmPuWU6_Ep8ZJtKc9h4NEBiAZE",
                },
               
              }).then((res) => {
                setRequests(res.data.requests)
              }).catch((err) => {
                  console.log(err.response)
                })
              }
              ,[])


  return (
      <div style={{width:"100vw"}}>

        <img className="viewScheduleLogo" src={logo} alt="Logo" />
        <i className="fa fa-sign-out fa-lg sign-out-ALL" onClick={logoutClick}></i>
          <p className="viewScheduleHeaders">Requests</p>
          <div>
      <Button  className="filterButton"   onClick={()=>filterAccepted()}>Filter Accepted</Button>
      <Button   className="filterButton"  onClick={()=>filterPending()}>Filter Pending</Button>
      <Button  className="filterButton"   onClick={()=>filterRejected()}>Filter Rejected</Button>
    </div>

          <Table  striped className="viewAllRequestsTable">
           <tbody>
               
               
            {
              reqClone.map((r)=>{
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

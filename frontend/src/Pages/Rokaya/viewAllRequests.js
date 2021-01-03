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






export default function ViewAllRequests(props) {
  const [requests, setRequests] = useState([])
  const [accepted, setAccepted] = useState([])
  const [rejected, setRejected] = useState([])
  const [pending, setPending] = useState([])

  const [filter, setFilter] = useState('')
  const [modal, setModal] = useState(false);
  const [error,setError]=useState('')
  const toggle = () => {
      setModal(!modal)
      window.location.reload();
    };

    const filterAccepted=()=>{
       // console.log("heyyyyyyyyyy")
       if(filter=='acc'){
                setFilter('')
       }
       else{
        setFilter('acc')
       }
        var x=requests.filter((r)=>{
            if(r.status=="accepted"){
                return r
            }
        })

        setAccepted(x)

    //    window.location.reload();
    }

    const filterPending=()=>{
        if(filter=='pend'){
            setFilter('')
   }
   else{
    setFilter('pend')
   }
        var x=requests.filter((r)=>{
            if(r.status=="pending"){
                return r
            }
        })

        setPending(x)
    }

    const filterRejected=()=>{
        if(filter=='rej'){
            setFilter('')
   }
   else{
    setFilter('rej')
   }
        var x=requests.filter((r)=>{
            if(r.status=="rejected"){
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
                          <p>Date Of Request: </p>
                   </td>
                   <td className="viewSentReplacementRequestTextData">
                            {r.dateOfRequest}
                   </td>
                   <td className="viewSentReplacementRequestTextTitle">
                               <p>Date Submitted: </p>
                   </td>
                   <td className="viewSentReplacementRequestTextData">
                             {r.dateSubmitted}
                   </td>
                   <td>
                   <i className="fa fa-close" onClick={()=>handleCancelRequest(r._id)}></i>
                   </td>

       </tr>


       <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader toggle={toggle}>Take Care</ModalHeader>
    <ModalBody>
    {JSON.stringify(error)}
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
      <div>

        <img className="viewScheduleLogo" src={logo} alt="Logo" />
          <p className="viewScheduleHeaders">Requests</p>
          <div>
      <Button color="success"  onClick={()=>filterAccepted()}>Filter Accepted</Button>
      <Button color="warning"   onClick={()=>filterPending()}>Filter Pending</Button>
      <Button color="danger"    onClick={()=>filterRejected()}>Filter Rejected</Button>
    
    </div>

          <Table  striped>
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

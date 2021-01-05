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
import {FormGroup,Input,Label,Form,FormText} from 'reactstrap'






export default function SendAnnualLeave(props) {
  
  const [error,setError]=useState('')
  const [modal,setModal]=useState(false)
  const [state, setState] = useState({
    reason:'',
    date:'',
    replacements:[],
    requests:[]
  })

  const handleChange = (event) => {
    let newValue = event.target.value
    let name = event.target.name
    setError({})
    setState((prevState) => {
      return {
        ...prevState,
        [name]: newValue,
      }
    })
  }
  const toggle = () => {
    props.setShow(!props.show)
    };

    const toggle2 = () => {
       setModal(!modal)
        };

    const handleSubmit= async ()=>{
        setModal(!modal)
        await axios({
            url: `${backendLink}/request/sendAnnualLeaveRequest`,
            method: 'post',
            headers: {
              token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFjLTEiLCJyb2xlIjoiY29vcmRpbmF0b3IiLCJpYXQiOjE2MDkzNDA3MTR9.Gj-oLfyvDPDNY6f_PBmPuWU6_Ep8ZJtKc9h4NEBiAZE",
            },
            data:{
                   date:state.date,
                   reason:state.reason,
                   replacements:state.replacements,
                   requests:state.requests
            },

           
          }).then((res) => {
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
        props.setShow(!props.show)

    }

  return (
      <div>
  <Modal isOpen={modal} toggle={toggle2}>
    <ModalHeader toggle={toggle2}>Take Care</ModalHeader>
    <ModalBody>
    {JSON.stringify(error).substring(1,error.length-1)}
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={toggle2}  className="sendReplacementButton">Ok</Button>
    </ModalFooter>
  </Modal>

<Modal  isOpen={props.show} toggle={toggle} className="sendReplacementModal">
<ModalHeader toggle={toggle} className="sendReplacementHeaderFont">Send Annual Leave Request</ModalHeader>
<ModalBody>
<Form>
 
  <FormGroup>
    <Label for="exampleEmail" className="sendReplacementTitleFont">Date Of Request * </Label>
    <Input  className="sendReplacementInput"  name='date'  onChange={handleChange} placeholder="date of the request " />
  </FormGroup>
  <FormGroup>
    <Label for="exampleEmail" className="sendReplacementTitleFont">Replacement Memmbers  </Label>
    <Input  className="sendReplacementInput"  name='replacements'  onChange={handleChange} placeholder="Member 1 ID" />
    <Input  className="sendReplacementInput"  name='replacements'  onChange={handleChange} placeholder="Member 2 ID" />
    <Input  className="sendReplacementInput"  name='replacements'  onChange={handleChange} placeholder="Member 3 ID " />
    <Input  className="sendReplacementInput"  name='replacements'  onChange={handleChange} placeholder="Member 4 ID " />
    <Input  className="sendReplacementInput"  name='replacements'  onChange={handleChange} placeholder="Member 5 ID " />
  </FormGroup>
  <FormGroup>
    <Label for="exampleEmail" className="sendReplacementTitleFont">Request ID's  </Label>
    <Input  className="sendReplacementInput"  name='requests'  onChange={handleChange} placeholder="Request 1 ID " />
    <Input  className="sendReplacementInput"  name='replacements'  onChange={handleChange} placeholder="Request 2 ID " />
    <Input  className="sendReplacementInput"  name='replacements'  onChange={handleChange} placeholder="Request 3 ID " />
    <Input  className="sendReplacementInput"  name='replacements'  onChange={handleChange} placeholder="Request 4 ID " />
    <Input  className="sendReplacementInput"  name='replacements'  onChange={handleChange} placeholder="Request 5 ID " />
  </FormGroup>

  <FormGroup>
    <Label for="exampleText" className="sendReplacementTitleFont">Reason For Leave</Label>
    <Input className="sendReplacementTextInput" type="textarea" placeholder="Optional Reason" name='reason'  onChange={handleChange}/>
  </FormGroup>
  
   
</Form>
<Button color="primary" onClick={handleSubmit} className="sendReplacementButton" >Submit</Button>
</ModalBody>
{/* <ModalFooter>
     
    </ModalFooter> */}
</Modal>
</div>

  )
}


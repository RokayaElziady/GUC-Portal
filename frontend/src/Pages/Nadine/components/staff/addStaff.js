import React,{useState} from 'react'
import Axios from 'axios'
import {backendLink} from '../../../../keys_dev'
import qs from 'qs';
const querystring = require('querystring');
export default function AddStaff(props) {
  const [details, setDetails] = useState({name:""})
  const [email, setemail] = useState("")
  const [extra, setextra] = useState("")
  const [success, setSuccess] = useState("")
  const [work, setwork] = useState("")
  const [role, setrole] = useState("")
  const [salary, setSalary] = useState("")
  const [office, setoffice] = useState("")
  const [gender, setgender] = useState("")
  const [Department, setDepartment] = useState("")
  const [off, setoff] = useState("")
 const Submit=event=>{
   if(!parseInt(salary)){
     
     setSuccess("salary not a number")
     return;
   }
   console.log("here1")
   event.preventDefault();
   let data={};

   data.name=details;
   data.email=email;
 if(work==="acadamic"){
data.department=Department;}
   if(work===""){
setSuccess("select hr or acadamic")
return;
   }
   console.log("here2")
   if(work==="acadamic"){
   if(off===""){
    setSuccess("select a day off")
    return;
       }
       data.dayOff=off;}

   if(gender===""){
    setSuccess("select gender")
    return;
       }
     data.salary=salary
       data.gender=gender
      
   if(work==="acadamic"){
     if(role===""){
      setSuccess("select hr or role")
      return;
     }
     else{
       data.role=role;
     }
   }
   if(extra!==""){
     data.extraInformation=extra
   }
 if(office!==""){
   data.officeLocation=office;
 }

 
console.log(`${backendLink}/${work}`)
  const options = {
    method: 'POST',
    headers: {  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImhyLTEiLCJpYXQiOjE2MDk2MDEwMTN9.b9C36kkrTjXlUaFxeur0INCh-zB3_Mm21l88_rnPi78" },
    data: querystring.stringify(data),
    url:  `${backendLink}/${work}`,
  };
  console.log("o"+options.url)
  Axios(options)
  .then(res => {
    console.log(res.data)
    if(res.data.error){
      setSuccess(res.data.error);
      return;
    }
    if(res.data.message){
      setSuccess(res.data.message);
      return;
    }
 console.log(res.data);
      setSuccess("success");
    return;
  }).catch((err) => {
    console.log("here7")
    console.log(err.response)
    if(err.response.data.message){
      
      setSuccess(err.response.data.message);}
     else{ setSuccess("invalid form");}
   return;
  });  
 }

  return (
    <form onSubmit={Submit}>

    <h3>Add a Staff</h3>
    <div className="form-group">
        <label>Name</label>
        <input type="text" required onChange={e=>{setDetails(e.target.value)}}className="form-control" placeholder="Name" />
    </div>
    <div className="form-group">
        <label>Email</label>
        <input type="text" required onChange={e=>{setemail(e.target.value)}}className="form-control" placeholder="Email" />
    </div>
    {work === "acadamic" &&
    <div className="form-group">
        <label>Department</label>
        <input type="text" required onChange={e=>{setDepartment(e.target.value)}}className="form-control" placeholder="Department" />
    </div>}
    <div  onChange={e=>{setwork(e.target.value)}}>
   <input type="radio"  value="acadamic" name="work" /> Acadamic Member
        <input type="radio"  value="hrStaff" name="work" /> Hr
      </div>
      {work === "acadamic" &&
    <div className="form-group">
        <label>Role</label>
        <div onChange={e=>{setrole(e.target.value)}}>
        <input type="radio"  value="coordinator" name="r" /> coordinator
        <input type="radio"  value="HOD" name="r" /> HOD
        <input type="radio"  value="DOC" name="r" /> DOC
        <input type="radio"  value="TA" name="r" /> TA
        </div>   </div> 
 
      }
      {work === "acadamic" &&
      <div className="form-group">
      <label>DayOff:</label>
      <div  onChange={e=>{setoff(e.target.value)}}>
      
        <input type="radio" value="Saturday" name="day" /> Saturday
        <input type="radio" value="Sunday" name="day" /> Sunday
        <input type="radio" value="Monday" name="day" /> Monday
        <input type="radio" value="Tuesday" name="day" /> Tuesday
        <input type="radio" value="Wednesday" name="day" /> Wednesday
        <input type="radio" value="Thursday" name="day" /> Thursday
        </div>   </div>}
      <div  onChange={e=>{setgender(e.target.value)}}>
        <input type="radio" value="male" name="gender" /> Male
        <input type="radio" value="female" name="gender" /> Female
       
      </div>
   
    <div  className="form-group">
        <label>Salary</label>
        <input type="text" required className="form-control" placeholder="Enter Number" onChange={e=>{setSalary(e.target.value)}}/> 
    </div> 
  
    <div  className="form-group">
        <label>
        office Location</label>
        <input type="text" className="form-control" onChange={e=>{setoffice(e.target.value)}} /> 
    </div> 
    <div  className="form-group">
        <label>
        Extra Information</label>
        <input type="text" className="form-control" onChange={e=>{setextra(e.target.value)}} /> 
    </div> 
  

                    <button type="submit" className="btn btn-dark btn-lg btn-block ">Done</button>
                    <p>{success}</p>
                </form>
  )
}

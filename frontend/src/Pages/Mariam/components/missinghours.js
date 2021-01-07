import React,{useEffect,useState} from 'react'
import Axios from 'axios'
import {backendLink} from '../../../keys_dev'
import qs from 'qs';
export default function Missing(props) {
  const [staff, setstaff] = useState("")
 
  const [success, setsuccess] = useState("")
  
 const Go= async (e) => {
     console.log("here")
   
  const options={
    url: `${backendLink}/staff/missinghours`,
    method: 'get',
  
    headers: {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFjLTIiLCJyb2xlIjoiSE9EIiwiaWF0IjoxNjEwMDM3OTMyfQ.F9NCo_fN95m8ntjWIlJidGQmlbTjZPi2AWkdIjS3KI8",
    },
 
   
  }
  console.log("l"+options.data)
   Axios(options).then((res) => {
  
    setsuccess("Done")
              
                  if(res.data!=undefined){
               setstaff(res.data)
              
                  }
              }).catch((err) => {
                  console.log(err.response)
                })}
             
 
  return (
    <div>

     <button onClick={Go}>Go</button>
    <h3>Attendance</h3>
    
    <h4>Missing</h4>
    
      <div>{staff}</div>

          
        
    
          <p>{success}</p></div>
          
          
  )
}


import React,{useEffect,useState} from 'react'
import Axios from 'axios'
import {backendLink} from '../../../../keys_dev'

export default function Missing(props) {
  const [staff, setstaff] = useState([])
 
   useEffect( async () => {
  
       await Axios({
                url: `${backendLink}/attendance`,
                method: 'get',
                headers: {
                  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImhyLTEiLCJpYXQiOjE2MDk2MDEwMTN9.b9C36kkrTjXlUaFxeur0INCh-zB3_Mm21l88_rnPi78",
                },
               
              }).then((res) => {
                  if(res.status===200){
               setstaff(res.data)
              
                  }
              }).catch((err) => {
                  console.log(err.response)
                })
              });
 
  return (
    <div>
  
    <h3>Staff with Missing Attendance</h3>
    {staff.map((inputField, index) => ( 
      <div>{inputField}</div>

          ))}</div>
  )
}

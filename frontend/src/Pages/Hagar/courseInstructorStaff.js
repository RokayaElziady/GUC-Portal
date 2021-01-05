import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../Stylesheets/Hagar/HOD.css';
import { Button, Form,Table } from 'react-bootstrap';
import axios from 'axios'
import { backendLink } from '../../keys_dev'
import { useState, useEffect } from 'react';
export default function Staff(props) {
    const [courseName, setCourseName] = useState('');
    const [academicsDep, setAcademicsDep] = useState([]);
    const [academicsCourse, setAcademicsCourse] = useState([]);
    useEffect(() => {
        async function fetchMyData() {
            await getAcademicsInDep();
            await getAcademicsInCourse();
           
        }
        fetchMyData();
     },[])
    async function getAcademicsInDep() {
        await axios({
            url: `${backendLink}/courseInstructor/viewStaffByDep`,
            method: 'get',
            headers: {
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFjLTMiLCJyb2xlIjoiVEEiLCJpYXQiOjE2MDk4Mjk3NjR9.WAu45Jn6ar0YkZjD53CkkL9rim4rOWUjXwJQpimzLoA"
            },
            data: {}
        }).then((res) => {
            setAcademicsDep(res.data);
            
           
        }).catch((err) => {
     
            console.log(err.response)
        })
    }
    async function getAcademicsInCourse() {
        await axios({
            url: `${backendLink}/courseInstructor/viewStaffByCourse`,
            method: 'get',
            headers: {
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFjLTMiLCJyb2xlIjoiVEEiLCJpYXQiOjE2MDk4Mjk3NjR9.WAu45Jn6ar0YkZjD53CkkL9rim4rOWUjXwJQpimzLoA"
            },
            data: {}
        }).then((res) => {
            setAcademicsCourse(res.data);
            
           
        }).catch((err) => {
     
            console.log(err.response)
        })
    }
    return (
        <div className="main-container">
            <h2>Staff In Department</h2>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>ID</th>
                <th>Email</th>
                <th>Name</th>
                <th>Courses</th>
                <th>Instructor For</th>
                <th>Coordinator For</th>
                </tr>
            </thead>
            <tbody>
                {
                    academicsDep.map((c, i) => {
                        return (
                            <tr key={i+1}>
                            <td>{i+1}</td>
                            <td>{c.id}</td>
                            <td>{c.email}</td>
                            <td>{c.name}</td>
                            <td>{c.courses}</td>
                            <td>{c.instructorFor}</td>
                            <td>{c.coordinatorFor}</td>
                            </tr>
                        );
                    })
                }  
            
            </tbody>
            </Table>
            <h2>Staff By Course</h2>
            
          <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>ID</th>
                <th>Email</th>
                <th>Name</th>
                <th>Courses</th>
                <th>Instructor For</th>
                <th>Coordinator For</th>
                </tr>
            </thead>
            <tbody>
                {
                    academicsCourse.map((c, i) => {
                        return (
                            <tr key={i+1}>
                            <td>{i+1}</td>
                            <td>{c.id}</td>
                            <td>{c.email}</td>
                            <td>{c.name}</td>
                            <td>{c.courses}</td>
                            <td>{c.instructorFor}</td>
                            <td>{c.coordinatorFor}</td>
                            </tr>
                        );
                    })
                }  
            
            </tbody>
            </Table>
            
        </div>
    );

    
}
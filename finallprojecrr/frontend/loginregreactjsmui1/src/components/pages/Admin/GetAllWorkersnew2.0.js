// import React, { PureComponent } from 'react'
import GetWorkerService from './GetWorkerService'
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

// class GetAllWorkers extends PureComponent {
//     constructor(props) {
//         super(props)

//         this.state = {
//             workers: []
//         }
//     }
    const GetAllWorkersnew = () => {
        const [workers, setWorkers] = useState({
        address:{ city:"" },
        first_name: "",
        last_name: "",
        emailId: "",
        verified:"",
        mobile:"",
        });
       
        useEffect(() => {
          loadUser();
        }, []);
        const loadUser = async () => {
          const res = await axios.get("http://localhost:8080/Worker/Controller/AllWorker");
         
          setWorkers(res.data);
          alert(JSON.stringify(res.data));
          console.log("data is : "+workers.first_name);
          
        };

   
        return (
            <div>
               
           <h2 className="text-center">Workers List</h2>
                
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                             
                                    <th> First Name</th>
                                    <th> Last Name</th>
                                    <th> Email Id</th>
                                    <th> mobile</th>
                                    <th> city</th>
                                    {/* <th> Profession</th> */}
                                    <th> verified</th>
                                    <th> Actions</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                
                                    
                                        <tr>
                                            
                                             <td> { workers.first_name} </td>   
                                             <td> {workers.last_name}</td>
                                             <td> {workers.emailId}</td>
                                             <td> {workers.mobile}</td>
                                             {/* <td> {workers.address.city}</td> */}
                                             {/* <td > {workers.profession.prof_name}</td> */}
                                             <td> {workers.verified}</td>
                                             
                                             
                                             <td width={"500vh"}>
                                                 <a href={`/UpdtWrkByAdmin/${workers.worker_id}`} action >
                                                    <button style={{marginLeft: "10px"}} className="btn btn-danger">Update</button>
                                                                 </a>
                                                 <a href={`/DeleteWorker/${workers.worker_id}`} action >
                                                    <button style={{marginLeft: "10px"}} className="btn btn-danger">Delete</button>
                                    </a>
                                </td>
                                        </tr>
                                    )
                                
                            </tbody>
                        </table>

                 </div>
        </div>
        )
    }


export default GetAllWorkersnew;
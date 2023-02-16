import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewAdminByIdnew = () => {
      let items = JSON.parse(localStorage.getItem("admin-Info"));

  const [user, setUser] = useState({
 
    username: "",
    emailId: "",
    mobileno: "",
    address:{ city:"",state:"" }
  
  });
  const id  = items.username;
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:8080/Admin/Controller/GetCustomers/${id}`);
    setUser(res.data);
  };
  return (

    
    <div className="myprofile" >
      <br />
      <div className="container col-md-6 wrapper">
        <div className="app-wrapper" style={{border:"5px solid black"}}>
        <table className="table table-borderless" >
          <thead>
            <tr>
              <th className="title" colSpan={2}>
                Personal Details
                <hr className="myline2" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Username</th>
              <td>{user.username}</td>
            </tr>
            
            <tr>
              <th>Contact Number</th>
              <td>{user.mobileno}</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th colSpan={2}>
                Address Details
                <hr className="myline2" />
              </th>
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <th>Landmark</th>
              <td>{user.address.landmark}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{user.address.city}</td>
            </tr>
            <tr>
              <th>State</th>
              <td>{user.address.state}</td>
            </tr>
            <tr>
              <th>Pincode</th>
              <td>{user.address.pincode}</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
    // <div className="container py-4">
    //   {/* <Link className="btn btn-primary" to="/">
    //     back to Home
    //   </Link> */}
    //   <h1 className="display-4">Username: {id}</h1>
    //   <hr />
    //   <ul className="list-group w-50">
       
    //     <li className="list-group-item">User name: {user.username}</li>
    //     <li className="list-group-item">Email: {user.emailId}</li>
    //     <li className="list-group-item">Phone: {user.mobileno}</li>
    //     <li className="list-group-item">City: {user.address.city}</li>
    //     <li className="list-group-item">State: {user.address.state}</li>

    //   </ul>
    // </div>
  );
};

export default ViewAdminByIdnew;
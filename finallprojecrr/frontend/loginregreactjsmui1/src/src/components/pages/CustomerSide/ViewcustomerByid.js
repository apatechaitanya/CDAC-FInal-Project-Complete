import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewcustomerByid = () => {
  let items = JSON.parse(localStorage.getItem('user-Info'));
  console.log(items.first_name+" "+items.emailId+" "+items.id);
  const [user, setUser] = useState({
  address:{ city:"",state:"" },
  first_name: "",
    emailId: "",
    mobile: "",
  
  });
  const id = items.id;
  // const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:8080/Customer/Controller/GetCustomers/${id}`);
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
              <th>FirstName</th>
              <td>{user.first_name}</td>
            </tr>
            <tr>
              <th>LastName</th>
              <td>{user.last_name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{user.emailId}</td>
            </tr>
            <tr>
              <th>Contact Number</th>
              <td>{user.mobile}</td>
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
     
    //   <h1 className="display-4">User : {user.first_name}</h1>
    //   <hr />
    //   <ul className="list-group w-50">
    //    {console.log("city name"+user.city)}
    //     <li className="list-group-item">Firstname: {user.first_name}</li>
    //     <li className="list-group-item">Email: {user.emailId}</li>
    //     <li className="list-group-item">phone: {user.mobile}</li>
    //     <li className="list-group-item">City: {user.address.city}</li>
    //     <li className="list-group-item">State: {user.address.state}</li>

    //   </ul>
    // </div>
  );
};

export default ViewcustomerByid;
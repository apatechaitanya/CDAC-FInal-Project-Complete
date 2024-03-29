import React, { useState, useEffect } from "react";
import { Link, useParams ,useNavigate} from "react-router-dom";

import axios from "axios";

const UpdateWorker = () => {
  let history = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    emailId: "",
    password: "",
    address:{city:""}
  });

  const { first_name,last_name,  emailId, password } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/Worker/updateWorker/${id}`, user);
    
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/Worker/Controller/GetWorker/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          
          
        
          
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="firstname"
              value={first_name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={last_name}
              
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={emailId}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={password}
              onChange={e => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="City"
              name="city"
              value={user.address.city}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateWorker;
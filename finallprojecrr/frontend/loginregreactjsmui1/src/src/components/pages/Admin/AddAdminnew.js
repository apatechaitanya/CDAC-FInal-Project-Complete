import React, { PureComponent } from "react";
import AdminServices from "./AdminServices";
import { useState } from "react";
import axios from "axios";

import swal from "sweetalert2";

const AddAdminnew = () => {
  const [state, setState] = useState({});
  const [selectCity, setSelectCity] = useState("");

  const handleChange = (evnt) => {
    let paramName = evnt.target.name;
    let paramValue = evnt.target.value;

    setState((values) => ({ ...values, [paramName]: paramValue }));
  };

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
   
    console.log("1 mail is : " + state.pincode + "  ");
    axios
      .post("http://localhost:8080/Admin/Controller/RegistrationAdmin", state)
      .then((response) => {
        swal.fire({
          icon: "Success",
          title: "Register!!!",
          text: "You have Registered Succesfully",
          timer: 3000,
          showConfirmButton: true,
        });

        window.location.href = "/admin";
        console.log("mail is : " + state.city + "  ");
      })
      .catch((error) => {
        console.log("error is : " + error.message + "  ");
        swal.fire({
          icon: "warning",
          title: "Error!!!",
          text: "Please try again ",
          timer: 3000,
          showConfirmButton: true,
        });
      });
  };



  const cities = [
    "",
    
    "Akola",
    
    "Sambhaji Nagar",
    
    "Kolhapur",
    "Jalgaon",
    "Mumbai City",
    "Pune",
    "Sindhudurg",
  ];
  const pins = {
   
    Akola: [444001, 444002, 444003, 444004, 444005, 444006, 444008],
    
   
      "Sambhaji Nagar":[
      431001,
      431002,
      431003,
      431004,
      431005,
      431005,
      431006,
      431007,
      431008,
      431008,
      431009,
    ] ,Kolhapur:[
     416001,
      416002,
      416003,
      416004,
      416005,
      416005,
      416006,
      416007,
      416008,
      416008,
      416009,
      416009,
      416011,
      416014,
      416021,
      416025,
      416022,
      416028,
      ],Jalgaon:[425001,
      425002,
      425003,
      425004,
      425005,
      425005,
      425006,
      425007,
      425008,
      425008,
      425009,
          425009,],
      "Mumbai City":[400001,
      400002,
      400003,
      400004,
      400005,
      400005,
      400006,
      400007,
      400008,
      400008,
      400009,
      400009,
          400011,],
      "Pune": [
      411001,
      411002,
      411003,
      411004,
      411005,
      411005,
      411006,
      411007,
      411008,
          411009,],
      "Sindhudurg": [
          416601,
      416602,
      416603,
      416604,
      416605,
      416605,
      416606,
      416607,
      416608,
          416608
      ]
      
  };

  return (
    <div className="AddCust"  style={{border:"5px solid grey" ,margin:"auto", height:"600px"}}>
      {console.log("username is : " + state.username + "  ")}
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Add Admin</h3>

            <div className="card-body">
              <form action="" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label> Username </label>
                  <input
                    placeholder="Username"
                    name="username"
                    className="form-control"
                    minLength={2}
                    maxLength={15}
                    value={state.username}
                    onChange={handleChange}
                    pattern="[A-Za-z0-9]{2,15}"
                    required
                  />
                </div>
                <div className="form-group">
                  <label> Password </label>
                  <input
                    placeholder="Last Name"
                    name="password"
                    type="password"
                    minLength={8}
                    maxLength={12}
                    className="form-control"
                    value={state.password}
                    onChange={handleChange}
                    title="Required :one Captital, special character, integer,8 characters"
                    pattern="^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$"
                   required
                  />
                </div>
                <div className="form-group">
                  <label> Email Id </label>
                  <input
                    placeholder="Email Address"
                    name="emailId"
                    className="form-control"
                    value={state.emailId}
                    pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
            
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label> Mobile-no </label>
                  <input
                    placeholder="Mobile"
                    name="mobileno"
                    minLength={10}
                    maxLength={10}
                    className="form-control"
                    value={state.mobileno}
                    onChange={handleChange}
                    pattern="[6789][0-9]{9}"
                    required
                  />
                </div>

                {/* <div className="form-group">
                  <label> City </label>
                  <input
                    placeholder="City"
                    name="city"
                    minLength={2}
                    maxLength={20}
                    className="form-control"
                    value={state.city}
                    onChange={handleChange}
                    pattern="[A-Za-z]{1,20}"
                    required
                  />
                </div> */}

                <div className="form-group">
                  <label> Landmark </label>
                  <input
                    placeholder="Landmark"
                    name="landmark"
                    minLength={3}
                    
                    className="form-control"
                    value={state.landmark}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* <div className="form-group">
                  <label> Pincode </label>
                  <input
                    placeholder="Pincode"
                    name="pincode"
                    className="form-control"
                    minLength={6}
                    maxLength={6}
                    value={state.pincode}
                    onChange={handleChange}
                    pattern="[1-9][0-9]{5}"
                    required
                  />
                </div> */}



                <div  className="form-group">
      Select city and Pincode:
      <select   className="form-select" required
        onChange={(e) => {
          setSelectCity(state.city=e.target.value);
          
        }}
      >
        {cities.map((city) => {
          return <option>{city}</option>;
        })}
      </select>
      {
      selectCity && (
        <select className="form-select" required>
          {pins[selectCity].map((pin) => {
            return <option>{state.pincode=pin}</option>;
          })}
        </select>
      )}
    </div>



                <div className="form-group">
                  <label> State </label>
                  <input
                  disabled
                    placeholder="State"
                    name="state"
                    minLength={2}
                    
                    className="form-control"
                    value={state.state="MH"}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAdminnew;

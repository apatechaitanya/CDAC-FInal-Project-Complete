import React from "react";

import { useState } from "react";
import axios from "axios";
import emailjs from "emailjs-com";

import swal from "sweetalert2";

const AddWorkernew = () => {
  const [state, setState] = useState({});
  const [selectCity, setSelectCity] = useState("");

  const handleChange = (evnt) => {
    let paramName = evnt.target.name;
    let paramValue = evnt.target.value;

    setState((values) => ({ ...values, [paramName]: paramValue }));
  };

  const handleSubmit = (evnt) => {
    evnt.preventDefault();

    axios
      .post("http://localhost:8080/Worker/Controller/RegistrationWorker", state)
      .then((response) => {
        
        swal.fire({
          icon: "Success",
          title: "Success!!!",
          text: "You have Registered Succesfully",
          timer: 3000,
          showConfirmButton: true,
        });

        window.location.href = "/WorkerLogin";

        // emailjs
        //   .sendForm(
        //     "service_ljt3906",
        //     "template_fmo2dxf",
        //     evnt.target,
        //     "KELk1oogffvLLRoQ5"
        //   )
        //   .then(
        //     (result) => {
        //       console.log(result.text);
        //       console.log("cjenkjn");
        //     },
        //     (error) => {
        //       console.log(error.text);
        //       console.log("errerer");
        //     }
        //   );
      })
      .catch((error) => {
        console.log("error is : " + error.message + "  ");
      });
  };
  function clearFields() {
    setState("");
  }



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
    <div className="AddCust"  style={{border:"5px solid grey" ,margin:"auto", height:"750px"}}>
      
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center"style={{fontWeight: 'bold',marginTop:"10px",backgroundColor:"#f1e753"}}>Worker Registration</h3>

            <div className="card-body">
              <form action="" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label> First Name </label>
                  <input
                    placeholder="Enter First Name"
                    name="first_name"
                    minLength={2}
                    maxLength={15}
                    className="form-control"
                    value={state.first_name}
                    onChange={handleChange}
                    pattern="[A-Za-z]{1,15}"
                    required
                  />
                </div>
                <div className="form-group">
                  <label> Last Name </label>
                  <input
                    placeholder="Enter Last Name"
                    name="last_name"
                    minLength={2}
                    maxLength={15}
                    className="form-control"
                    value={state.last_name}
                    onChange={handleChange}
                    pattern="[A-Za-z]{1,15}"
                    required
                  />
                </div>
                <div className="form-group">
                  <label> Email Id </label>
                  <input
                    placeholder="example@gmail.com"
                    name="emailId"
                    className="form-control"
                    value={state.emailId}
                    onChange={handleChange}
                    pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                    title="ex - example1@gmail.com"
                 
                    required
                  />
                </div>

                <div className="form-group">
                  <label> Password </label>
                  <input
                    placeholder="Password@1"
                    name="password"
                    type="password"
                    className="form-control"
                    minLength={8}
                    maxLength={12}
                    value={state.password}
                    onChange={handleChange}
                    
                    title="Required :one Captital, special character, integer,8 characters"
                    pattern="^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$"
                       required
                  />
                </div>

                <div className="form-group">
                  <label> Mobile-no </label>
                  <input
                    placeholder="Mobile"
                    name="mobile"
                    className="form-control"
                    minLength={10}
                    maxLength={10}
                    value={state.mobile}
                    onChange={handleChange}
                    pattern="[6789][0-9]{9}"
                    required
                  />
                </div>

                <div className="form-group" hidden>
                  <label> Verified </label>
                  <input
                    placeholder="Verified"
                    name="verified"
                    className="form-control"
                    value={(state.verified = "Not Verified")}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-control mt-3">
                  <label> Select Profession</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    required
                    name="prof_id"
                    onChange={handleChange}
                    
                  >
                    <option value="" selected>
                      Profession
                    </option>
                    <option value="1">Electrician</option>
                    <option value="2">Carpenter</option>
                    <option value="3">Plumber</option>
                    <option value="4">Washing Machine Repair</option>
                    <option value="5">Painting</option>
                    <option value="6">Salon</option>
                 
                  </select>
                
                </div>

                {/* <div className="form-control mt-3">
                  <label> Select Availablity</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    required
                    name="available"
                    onChange={handleChange}
                  >
                    <option value="" selected>
                      Availablity
                    </option>
                    <option value="Available">Available</option>
                    <option value="Not Available">Not Available</option>

                  </select>
                </div> */}

                 <div className="form-group " hidden>
                  <label> Availablity </label>
                  <input
                    placeholder="available"
                    name="available"
                    minLength={2}
                    
                    className="form-control"
                    value={state.available="Not Available"}
                    onChange={handleChange}
                    pattern="[A-Za-z]{1,20}"
                    disabled
                    required
                  />
                </div> 

                <div className="form-group">
                  <label> Landmark </label>
                  <input
                    placeholder="Landmark"
                    name="landmark"
                    minLength={4}
                    
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
                    type="text"
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
                    className="form-control"
                    minLength={2}
                    value={state.state="MH"}
                    pattern="[A-Za-z]{1,20}"
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-success">
                  Submit
                </button>
                <button
                  type="reset"
                  className="btn btn-danger"
                  onClick={clearFields}
                  value="Reset"
                >
                  Reset
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWorkernew;

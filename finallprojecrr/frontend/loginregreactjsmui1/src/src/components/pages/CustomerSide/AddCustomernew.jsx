import React from "react";
import emailjs from "emailjs-com";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert2";
import * as Yup from "yup";

const AddCustomernew = () => {
  const [state, setState] = useState({});
  const [selectCity, setSelectCity] = useState("");
    console.log(selectCity);

  const handleChange = (evnt) => {
    let paramName = evnt.target.name;
    let paramValue = evnt.target.value;

    setState((values) => ({ ...values, [paramName]: paramValue }));
  };
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().min(1, "It's too short").required("Required"),
    last_name: Yup.string().min(3, "It's too short").required("Required"),
    password: Yup.string().min(3, "It's too short").required("Required"),
    emailId: Yup.string().email("Enter valid email").required("Required"),
    mobile: Yup.string().required("Required"),
    city: Yup.string().required("Required"),

    // gender: Yup.string().oneOf(["male", "female"], "Required").required("Required"),
  });
  // Example starter JavaScript for disabling form submissions if there are invalid fields

  const handleSubmit = (evnt) => {
    evnt.preventDefault();

    console.log("1 mail is : " + state.pincode + "  ");
    axios
      .post("http://localhost:8080/Customer/Controller/Registration", state)
      .then((response) => {
        console.log("mail is : " + state.city + "  ");
        swal.fire({
          icon: "Success",
          title: "Register!!!",
          text: "You have Registered Succesfully",
          timer: 3000,
          showConfirmButton: true,
        });
        window.location.href = "/Login";

        emailjs
          .sendForm(
            "service_ljt3906",
            "template_fmo2dxf",
            evnt.target,
            "KELk1oogffvLLRoQ5"
          )
          .then(
            (result) => {
              console.log(result.text);
              console.log("cjenkjn");
            },
            (error) => {
              console.log(error.text);
              console.log("errerer");
            }
          );
      })
      .catch((error) => {
        swal.fire({
          icon: "warning",
          title: "Warning!!!",
          text: "Unable to proceed With this data",
          timer: 3000,
          showConfirmButton: true,
        });
        console.log("error is : " + error.message + "  ");
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
    <div className="AddCust"  style={{border:"5px solid grey" ,margin:"auto", height:"710px"}}>
      {console.log("username is : " + state.username + "  ")}
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center" style={{fontWeight: 'bold',marginTop:"10px",backgroundColor:"#f1e753"}}>Add Customer</h2>

            <div className="card-body">
              <form
                action=""
                onSubmit={handleSubmit}
                class="needs-validation"
                novalidate
              >
                <div className="form-group">
                  <label> FirstName </label>
                  <input
                    placeholder="FirstName"
                    name="first_name"
                    class="form-control"
                     minLength={2}
                     maxLength={15}
                    value={state.first_name}
                    onChange={handleChange}
                     pattern="[A-Za-z]{1,15}"
                    required
                    aria-describedby="inputGroupPrepend"
                  />
                </div>
                <div className="form-group">
                  <label> LastName </label>
                  <input
                    placeholder="Last Name"
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
                    placeholder="Email Address"
                    name="emailId"
                    type={"email"}
                    className="form-control"
                    value={state.emailId}
                    onChange={handleChange}
                    pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
                    required
                  />
                </div>

                <div className="form-group">
                  <label> Password </label>
                  <input
                    placeholder="Password@1"
                    name="password"
                    type={"password"}
                    minLength={8}
                    security
                    className="form-control"
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

                {/* <div className="form-group">
                  <label> City </label>
                  <input
                    placeholder="City"
                    name="city"
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
                    className="form-control"
                    minLength={4}
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
                    value={state.pincode}
                    minLength={4}
                    maxLength={6}
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
                
                <div className="form-group" >
                  <label> State </label>
                  <input
                  disabled
                    placeholder="State"
                    name="state"
                    minLength={2}
                    className="form-control"
                    value={state.state="MH"}
                    onChange={handleChange}
                    pattern="[A-Za-z]{1,20}"
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

export default AddCustomernew;

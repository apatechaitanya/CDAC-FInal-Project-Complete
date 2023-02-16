import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert2";
const UpdateWorkernew = () => {
  let items = JSON.parse(localStorage.getItem("worker-info"));

  const [cust_id, setCust_id] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [available, setAvailable] = useState("");
  const [mobile, setMobile] = useState("");
  const [address_id, setAddress_id] = useState("");
  const [verified, setVerified] = useState("");
  const [city, setCity] = useState("");
  const [landmark, setLandmark] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [prof_id, setProf_id] = useState("");

  const id = items.worker_id;
  const pprof_id = items.profession.prof_id;
  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    let workers = {
      first_name,
      last_name,
      emailId,
      password,
      available,
      mobile,
      address_id,
      city,
      landmark,
      pincode,
      state,
      verified,
      prof_id,
    };
    console.log("new " + id);
    workers.prof_id = pprof_id;

    axios
      .put(
        `http://localhost:8080/Worker/Controller/updateWorker/${id}`,
        workers
      )
      .then((response) => {
        swal.fire({
          icon: "Success",
          title: "Updated!!!",
          text: "You have Updated Succesfully",
          timer: 3000,
          showConfirmButton: true,
        });
        window.location.href = "/UpdateWorkernew/:id";
      })
      .catch((error) => {});
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/Worker/Controller/GetWorker/${id}`)
      .then((response) => {
        console.log("first name is : " + response.data.first_name);
        setCust_id(response.data.cust_id);
        setFirstName(response.data.first_name);
        setLastName(response.data.last_name);
        setEmailId(response.data.emailId);
        setAvailable(response.data.available);
        setPassword(response.data.password);
        setMobile(response.data.mobile);
        setCity(response.data.address.city);
        setLandmark(response.data.address.landmark);
        setPincode(response.data.address.pincode);
        setState(response.data.address.state);
        setVerified(response.data.verified);
        setProf_id(response.data.profession.prof_id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    {
      return <h2 className="text-center">Update Employee</h2>;
    }
  };

  return (
    <div className="AddCust" style={{border:"5px solid grey" ,margin:"auto", height:"1050px"}}> 
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {title()}
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label"> First Name :</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    className="form-control"
                    minLength={2}
                    maxLength={15}
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                    pattern="[A-Za-z]{1,15}"
                    required
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Last Name :</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    minLength={2}
                    maxLength={15}
                    className="form-control"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                    pattern="[A-Za-z]{1,15}"
                    required
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Email Id :</label>
                  <input
                    type="email"
                    placeholder="Enter email Id"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                    pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
                 
                    required
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> passsword :</label>
                  <input
                    type="password"
                    placeholder="Enter passsword"
                    name="password"
                    minLength={8}
                    maxLength={12}
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    title="Required :one Captital, special character, integer,8 characters"
                    pattern="^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$"
                    required
                  ></input>
                </div>

                <div className="form-control mt-3">
                  <label> Select Availablity</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    required
                    name="available"
                    onChange={(e) => setAvailable(e.target.value)}
                  >
                    <option value="" selected>
                      Availablity
                    </option>
                    <option value="Available">Available</option>
                    <option value="Not Available">Not Available</option>

                  </select>
                
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> mobileno :</label>
                  <input
                    type="mobile"
                    placeholder="Enter mobileno"
                    name="mobile"
                    className="form-control"
                    minLength={10}
                    maxLength={10}
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    pattern="[6789][0-9]{9}"
                    required
                  ></input>
                </div>


                <div className="form-group mb-2">
                  <label className="form-label"> verification status :</label>
                  <input
                   disabled
                   type="verified"
                    placeholder="verified"
                    name="verified"
                    className="form-control"
                   
                   
                    value={verified}
                    onChange={(e) => setVerified(e.target.value)}
                   
                    required
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> city :</label>
                  <input
                    type="city"
                    placeholder="Enter city"
                    name="city"
                    className="form-control"
                    value={city}
                    minLength={2}
                    maxLength={20}
                    onChange={(e) => setCity(e.target.value)}
                    pattern="[A-Za-z]{1,20}"
                    required
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> landmark :</label>
                  <input
                    type="landmark"
                    placeholder="Enter landmark"
                    name="landmark"
                    className="form-control"
                    value={landmark}
                    minLength={3}
                    pattern="[A-Za-z]{1,20}"
                    onChange={(e) => setLandmark(e.target.value)}
                    required
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> pincode :</label>
                  <input
                    type="pincode"
                    placeholder="Enter pincode"
                    name="pincode"
                    className="form-control"
                    value={pincode}
                    minLength={6}
                    maxLength={6}
                    onChange={(e) => setPincode(e.target.value)}
                    pattern="[1-9][0-9]{5}"
                    required
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> state :</label>
                  <input
                   disabled
                    type="state"
                    placeholder="Enter state"
                    name="state"
                    minLength={2}
                    className="form-control"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                  ></input>
                </div>

                <div className="form-group mb-2" hidden>
                  <label className="form-label"> Prof_id :</label>
                  <input
                    type="number"
                    placeholder="Enter prof_id"
                    name="prof_id"
                    className="form-control"
                    value={pprof_id}
                    onChange={(e) => setState(e.target.value)}
                    required
                  ></input>
                </div>

                <button
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdateEmployee(e)}
                >
                  Submit{" "}
                </button>
                <Link to="/worker" className="btn btn-danger">
                  {" "}
                  Cancel{" "}
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateWorkernew;

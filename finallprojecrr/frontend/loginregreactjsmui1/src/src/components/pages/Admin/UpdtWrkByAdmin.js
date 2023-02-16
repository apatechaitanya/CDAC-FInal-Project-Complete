import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert2";
import { Verified } from "@mui/icons-material";
const UpdateWorkernew = () => {
  const { id } = useParams();
  const [cust_id, setCust_id] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [available, setAvailable] = useState("");
  const [mobile, setMobile] = useState("");
  const [address_id, setAddress_id] = useState("");
  const [city, setCity] = useState("");
  const [landmark, setLandmark] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [verified, setVerified] = useState("");
  const [prof_id, setProf_id] = useState("");

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
        window.location.href = "/GetAllWorkers";
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
        setPassword(response.data.password);
        setAvailable(response.data.available);
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
      return <h2 className="text-center">Update Worker</h2>;
    }
  };

  return (
    <div className="AddCust" style={{border:"5px solid grey" ,margin:"auto", height:"1150px"}} >
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
                    minLength={2}
                    maxLength={15}
                    className="form-control"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
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
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    title="Required :one Captital, special character, integer,8 characters"
                    pattern="^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$"
             required
                 ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Availability status :</label>
                  <input
                    type="available"
                    placeholder="Availability status"
                    name="available"
                    className="form-control"
                    value={available}
                    onChange={(e) => setAvailable(e.target.value)}
                    disabled
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> mobileno :</label>
                  <input
                    type="mobile"
                    placeholder="Enter mobileno"
                    name="mobile"
                    className="form-control"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    pattern="[6789][0-9]{9}"
                    required
                 ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> city :</label>
                  <input
                  disabled
                    type="city"
                    placeholder="Enter city"
                    name="city"
                    className="form-control"
                    value={city}
                    minLength={2}
                    maxLength={20}
                    onChange={(e) => setCity(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> landmark :</label>
                  <input
                    type="landmark"
                    placeholder="Enter landmark"
                    name="landmark"
                    className="form-control"
                    minLength={3}
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> pincode :</label>
                  <input
                  disabled
                    type="pincode"
                    placeholder="Enter pincode"
                    name="pincode"
                    className="form-control"
                    value={pincode}
                    pattern="[1-9][0-9]{5}"
                    onChange={(e) => setPincode(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> state :</label>
                  <input
                  disabled
                    type="state"
                    placeholder="Enter state"
                    name="state"
                    className="form-control"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  ></input>
                </div>

                {/* <div className="form-group mb-2">
                  <label className="form-label"> Verified :</label>
                  <input
                    type="prof_id"
                    placeholder="Enter verification status"
                    name="verified"
                    className="form-control"
                    value={verified}
                    onChange={(e) => setState(e.target.value)}
                  ></input>
                </div> */}
                <div className="form-control mt-3">
                  <label> Select Profession</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    required
                    name="verified"
                    onChange={(e) => setVerified(e.target.value)}
                  >
                    <option value="" selected>
                      Varification Status
                    </option>
                    <option value="Not Verified">Not Verified</option>
                    <option value="Verified">Verified</option>
                  </select>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Prof_id :</label>
                  <input
                  
                    type="prof_id"
                    placeholder="Enter prof_id"
                    name="prof_id"
                    className="form-control"
                    value={id}
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
                <Link to="/GetAllWorkers" className="btn btn-danger">
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
